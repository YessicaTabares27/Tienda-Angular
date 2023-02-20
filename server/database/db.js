// importando la funcion Sequelize de la libreria sequelize para iniciar la coneccion con la base de datos
import { Sequelize } from 'sequelize';

// iniciando la conexion con la base de datos
const db = new Sequelize('db_tiendaangular', 'poqpu48hr5h5xhg8eei9', 'pscale_pw_nHemP9O6McClxII0vQCPeTBhV7SRfBlws473Jr4XLbW', {
  host: 'us-east.connect.psdb.cloud',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
        rejectUnauthorized: true,        
    }
}
});

// exportandol aconexion con la base de datos
export default db;