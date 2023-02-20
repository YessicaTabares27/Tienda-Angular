// importando el modelo de la tabla de imagenes
import ImageModel from "../models/imageModel.js";

// funcion para obtener todas las imagenes de los productos
export const getImage = async (req, res) => {
  try {
    // guardando las imagenes en la variable images
    let images = await ImageModel.findAll({
      order: [
        ['idProduct', 'ASC']
      ]
    });
    // declarando una variable que contendra un objeto con las imagenes
    let imageObj = {}
    // primero se encarga de buscar si la propiedad expecifica de la imagen es propia y no heredada si esto se cumple ingresa la imagen en un arreglo dentro del objeto
    images.map(image => {
      if (imageObj.hasOwnProperty(image.idProduct)) imageObj[image.idProduct].push(image.image1);
      // de lo contrario cambia el valor de una propiedad especifica del objeto por la imagen en esta instancia
      else imageObj[image.idProduct] = [image.image1];
    });
    // devolviendo todas las imagenes como respuesta
    res.json(imageObj);
  } catch (error) {
    // ! error al obtener la informacion de la tabla de iamgenes
    res.json({ message: error.message });
  }
}

// funcion para obtener una imagen en especifico de un producto
export const getImageMain = async (req, res) => {
  try {
    // almacenando las imagenes de un producto en una variable llamada images
    let images = await ImageModel.findAll({
      where: { idProduct: req.params.id }
    })
    // creando una variabel que contendra un objeto con las imagenes de un producto especifico
    let imageObj = {}
    // primero se encarga de buscar si la propiedad expecifica de la imagen es propia y no heredada si esto se cumple ingresa la imagen en un arreglo dentro del objeto
    images.map(image => {
      if (imageObj.hasOwnProperty(image.idProduct)) imageObj[image.idProduct].push(image.image1);
      // de lo contrario cambia el valor de una propiedad especifica del objeto por la imagen en esta instancia
      else imageObj[image.idProduct] = [image.image1];
    });
    // devolviendo las imagenes del producto como respuesta
    res.json(imageObj);
  } catch (error) {
    // ! error al obtener la informacion de la tabla de iamgenes
    res.json({ message: error.message });
  }
}