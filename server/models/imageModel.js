// importando la conexion a la base de datos
import db from "../database/db.js"
// importando el metodo DataTypes para definir el tipo de dato que tendran algunos de los campos de la base de datos
import { DataTypes } from "sequelize"

// creando el modelo de la tabal de imagenes con los campos y caracteristicas descritas en el siguiente bloque de codigo
const ImageModel = db.define('images', {
  image1: {
    type: DataTypes.TEXT('medium'),
  },
  idProduct: {
    type: DataTypes.INTEGER,
  },
}, {
  createdAt: false,
  updatedAt: false
});

ImageModel.sync({ alter: true })

// exportando el modelo de la tabla de imagenes
export default ImageModel;