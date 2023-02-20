// importando express para crear el servidor o API que controlara la informacion que se le deba enviar a la base de datos
import express from "express";
// importanto cors para segurar la conexion entre la base de datos y el servidor que se mantendra con angular 
import cors from 'cors'
// importando las rutas del servidor backend
import routes from "./routes/routes.js";
// importando la conexion a labase de datos
import db from "./database/db.js";
//
import { getImage } from "./controllers/imageController.js";

// probando la conexion con la base de datos
try {
  // * comprueba la conexion con la base de datos
  db.authenticate();
  // base de datos conectada correctamente
  console.log('database connected successfully');
} catch (error) {
  // ! error al conectarse a la base de datos
  console.log(`Error: ${error}`);
}

// almacenando el servidor de express en uan variable de nombre app
const app = express();
// asignando el puerto del servidor sea 3900 o el que el host le asigne
const PORT = process.env.PORT || 3900;

// configurando los middlewares que van a manejar la informacion que llega a la api, cors para evitar errores en la conexion entre el servidor de express y angular, express json para transformar toda la llegada de datos a algo que el lenguaje puede entender, express urlencoded para transformar la informacion que llega en formato de direccion de formulario a algo que entienda el lenguaje
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());



// rutas principal que da acceso a las otras rutas del servidor
app.use('/api', routes);

// iniciando la escucha de peticiones por parte del servidor 
app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`)
})