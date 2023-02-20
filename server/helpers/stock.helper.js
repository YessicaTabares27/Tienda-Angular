// importando el modelo de la tabla de productos
import ProductModel from "../models/productModel.js";

// constante que guarda la id, el nombre, el stock y la cantidad minima de stock permitida antes de enviar un correo al administrador
const products = await ProductModel.findAll({
  attributes: ['id', 'name', 'stock', 'stockMin']
})

// variable que se usara para almacenar la cantidad actual de los productos
let productsStock = {}
// variable que se usara para almacenar la cantidad minima actual de los productos
let productMinStock = {}
// almacena dentro de la variable productsStock un objeto con la informacion de los productos la que contendra su nombre y su cantidad actual
products.forEach(product => { productsStock[product.dataValues.id] = product.dataValues.stockCurrent });
// almacena dentro de la variable productMinStock un objeto con la informacion de los productos la que contendra su nombre y su cantidad minima antes del aviso de stock agotandose
products.forEach(product => { productMinStock[product.dataValues.id] = { stockMin: product.dataValues.stockMin, name: product.dataValues.name } });

// exportando las variables que contienen la informacion de la cantidad de los productos
export { productsStock, productMinStock };