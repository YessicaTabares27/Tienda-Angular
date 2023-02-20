// importando la conexion a la base de datos
import db from "../database/db.js"
// importando el metodo DataTypes para definir el tipo de dato que tendran algunos de los campos de la base de datos
import { DataTypes } from "sequelize"

// creando el modelo de la tabla de productos la cual tendra los campos con las caracteristicas presentadas en el bloque de codigo siguiente
const ProductModel = db.define('productos', {
  name: {
    type: DataTypes.STRING,
  },
  details: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  stockMin: {
    type: DataTypes.INTEGER,
  },
  stockMax: {
    type: DataTypes.INTEGER,
  },
  stock: {
    type: DataTypes.INTEGER,
  }
}, {
  createdAt: false,
  updatedAt: false
});

ProductModel.sync({ alter: true })

// exportando el modelo de la tabla de productos
export default ProductModel;