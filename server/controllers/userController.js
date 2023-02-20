// exportando la funcion encargada de encriptar las contraseñas
import { encrypt } from "../helpers/encrypt.helper.js";
// exportando el modelo de la tabla de usuario
import UserModel from "../models/userModel.js";

// obtener un usuario existente en la base de datos, esta funcion recibe como parametro req el nombre de usuario y la contraseña y devuelve por ahora toda la informacion acerca del usuario
export const getUser = async (req, res) => {
  try {
    // * busca el usuario a partir de las credenciales ingresadas
    const users = await UserModel.findAll({
      where: {
        username: req.body.username,
        password: encrypt(req.body.password)
      }
    })
    // comrpueba que se haya enviado toda la informacion
    if (users.length != 1) res.json('Usuario no valido');
    // devuelve como respuesta el nombre de usuario
    res.json(users[0]);
  } catch (error) {
    // ! error en la peticion al servidor
    res.json({ message: error.message })
  }
}

// crear un nuevo usuario, esta funcion recibe como parametro req toda la informacion acerca del nuevo usuario y si este usuario no existe se crea, y devuelve un mensaje avisando que el usuario se creo correctamente
export const createUser = async (req, res) => {
  console.log({...req.body})
  try {
    // * añade un nuevo registro a la tabla de usuarios con la informacion que llego
    await UserModel.create({ ...req.body, password: encrypt(req.body.password) });
    // devuelve un mensaje para confirmar que el usuario se ha creado
    return res.json('User Created successfully');
  } catch (error) {
    // ! error en la peticion al servidor
    return res.json("Data not valid");
  }
}

// permite modificar el perfil del usuario esta funcion recibe toda la informacion del usuario admin nueva pero antes valida si de verdad es un usuario de administrador
export const updateAdmin = async (req, res) => {
  try {
    // * actualiza los datos de la cuenta de administrador
    await UserModel.update({ ...req.body, password: encrypt(req.body.password) }, {
      where: { root: 1 }
    });
    // devuelve un texto que afirma que la cuenta de administrador se actualizo exitosamente
    res.json('Admin updated')
  } catch (error) {
    // ! error en la peticion al servidor
    res.json({ message: error.message })
  }
}