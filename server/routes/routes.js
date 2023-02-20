// exportando express en este caso para configurar las rutas
import express from 'express';
// importando los controladores para las imagenes
import { getImage, getImageMain } from '../controllers/imageController.js';
// importando los controladores para el manejo de productos
import { bookProduct, buyProducts, getAllProducts, getProduct, updateProduct } from '../controllers/productController.js';
// importando los controladores para manejar los usuario
import { createUser, getUser, updateAdmin } from '../controllers/userController.js';

// guardando el router en una constante para establecer las direccion de las rutas
const router = express.Router();

// ruta para obtener todos los productos existentes en la base de datos
router.get('/products', getAllProducts);

// ruta para obtener un producto especifico a apartir de su id
router.get('/products/:id', getProduct);

// ruta para obtener todas las imagenes de los productos
router.get('/images', getImage);

// ruta para obtener la imagen de un producto en especifico
router.get('/images/:id', getImageMain);

// rutas para la validacion y registro de usuarios
  // validar un usuario ya registrado
router.post('/users/login', getUser);
  // crear un nuevo usuario no existente
router.post('/users/signup', createUser);
  // actualizar el perfil del usuario admin
router.put('/users/admin', updateAdmin);

// ruta para hacer la reserva de un articulo para un usuario
router.get('/book/:id', bookProduct);

// ruta para confirmar la compra de los articulos que fueron reservados por un usuario
router.put('/buy', buyProducts);

// ruta para que el administrador de la pagina pueda actualizar la informacion de un producto 
router.put('/update/:id', updateProduct);

// exportando rutas
export default router;