// importando la conexion a la base de datos
import db from "../database/db.js"
// importando el metodo DataTypes para definir el tipo de dato que tendran algunos de los campos de la base de datos
import { DataTypes } from "sequelize"

// creacion del modelo de la tabla de usuarios la cual contendra los campos con las caracteristicas presentadas en el siguiente bloque de codigo
const UserModel = db.define('users', {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  root: {
    type: DataTypes.BOOLEAN,
  },
  address: {
    type: DataTypes.STRING,
  }
}, {
  createdAt: false,
  updatedAt: false
}
)

UserModel.sync({ alter: true })

// exportando el modelo de la tabla de usuarios
export default UserModel;