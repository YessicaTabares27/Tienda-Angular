// importando el modelo de la tabla de productos
import ProductModel from "../models/productModel.js";
// importando las funciones que me devuelven el estado actual del stock de un producto
import { productsStock, productMinStock } from "../helpers/stock.helper.js"
// importando la funcion que permite enviarle un email al administrador en caso de que un producto se este acabando
import { sendMail } from "../helpers/sendmail.helper.js";

// funcion que sirve para llamar a todos los productos contenidos en la base de datos
export const getAllProducts = async (req, res) => {
  try {
    // * realiza la busqueda de todos los productos
    const productos = await ProductModel.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
    // devuelve como respuesta la orden con todos los productos
    res.json(productos);
  } catch (error) {
    // ! error al buscar los productos
    res.json({ message: error.message })
  }
}

// funcion para obtener un producto especifico por su id, recibe la id del producto y devuelve toda su informacion
export const getProduct = async (req, res) => {
  try {
    // * realiza la busqueda del producto especifico
    const productos = await ProductModel.findAll({
      where: { id: req.params.id }
    })
    // devuelve como respuesta la orden del producto que se pidio
    res.json(productos[0]);
  } catch (error) {
    // ! error al buscar los productos
    res.json({ message: error.message });
  }
}

// funcion para actualizar un producto especifico por su id, recibe la id del producto mas los cambios realizados y los actualiza
export const updateProduct = async (req, res) => {
  try {
    await ProductModel.update(req.body, {
      where: { id: req.params.id }
    });
    // devuelve como respuesta la orden del producto que se pidio
    res.json('Registro actualizado correctamente')
  } catch (error) {
    // ! error al buscar los productos
    res.json({ message: error });
  }
}

// funcion para reservarle un producto a un cliente
export const bookProduct = (req, res) => {
  try {
    // * realiza la recerva del producto
    if (req.query.f === 'unbook') {
      // aumenta la cantidad de productos en reserva
      productsStock[req.params.id]++;
      // devuelve la respuesta de la reserva
      return res.json('Unbooked');
    } else if (req.query.f === 'book') {
      // se asegura de que la cantidad de recervados no sea 0
      if (productsStock[req.params.id] == 0) return res.json('Stockout')
      // disminuye la cantidad de productos en reserva
      productsStock[req.params.id]--;
      // devuelve la respuesta de la reserva
      return res.json('Booked');
    }
    res.status(400).json('Bad request');
  } catch (error) {
    // ! error al buscar los productos
    res.json({ message: error.message });
  }
}

// funcion para realizar la actualizacion del contenido de un producto la cual sera usada en la funcion de compra de producto
const updateContent = async (product, quantity) => {
  // contante que almacena la informacion hacerca de la cantidad del producto buscado
  const stock = await ProductModel.findAll({
    attributes: ['id', 'stock'],
    where: { id: product }
  })
  // actualizacion de un producto a partir de la cantidad que se haya comprado
  await ProductModel.update({ stock: stock[0].dataValues.stock - quantity[product] }, {
    where: { id: product }
  })
  // condicional que informa si el producto recien comprado a llegado a su stock minimo para luego enviar un email
  if (productMinStock[product].stockMin >= stock[0].dataValues.stock - quantity[product]) {
    sendMail({ id: product, name: productMinStock[product].name });
  }
}

// funcion para realizar las modificaciones por la compra de un producto
export const buyProducts = async (req, res) => {
  try {
    // obteniendo la llave del producto que se va a actualizar debido a su compra
    Object.keys(req.body).forEach(product => updateContent(product, req.body));
    // respuesta que dice que la compra se ha realizado correctamente
    res.json("Successful purchase");
  } catch (error) {
    // ! error al buscar los productos
    res.json(error.message);
  }
}