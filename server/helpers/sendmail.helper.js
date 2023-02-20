// importando la libreria nodemailer para poder enviar emails
import nodemailer from 'nodemailer';

// creando una constante la cual contendra el metodo de envio del correo para que al administrador le llegue un mensaje si algo se esta quedando sin stock
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'ecommersektry@gmail.com',
    pass: '12345689'
  }
})

// exportando la funcion que se encarga de enviarle un email al administrador de la pagina en caso de que un producto se este agotando
export const sendMail = prod => {
  transporter.sendMail({
    from: "tienda <tryang@gmail.com",
    to: "santiago.torifa@utp.edu.co",
    subject: "Avisto stock mínimo",
    text: `El stock del producto ${prod.id}. ${prod.name} se esta agotando`
  }).then(console.info)
    .catch(console.catch)
}