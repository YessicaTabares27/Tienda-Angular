// importando la libreria cripo js para incriptar o desencriptar alguna contraseña
import CryptoJS from "crypto-js";

// llave a partir de la cual se encriptaran las contraseñas o se desencriptaran
const key = "angular@ecommerce.tsO";

// funcion encargada de encriptar las contraseñas, recibe una contraseña no cifrada y la devuele cifrada a partir del codigo que genera la llave
export const encrypt = (text) => {
  // almacenando el estandar de incriptacion en uan constante para luego ser usado
  const hash = CryptoJS.SHA256(key);
  // cifrando la contraseña del usuario a partir del esstandar de incriptacion
  const ciphertext = CryptoJS.AES.encrypt(text, hash, {
    mode: CryptoJS.mode.ECB,
  });
  // devuelve la contraseña encriptada como un string
  return ciphertext.toString();
};

// exportando el modulo de desencriptacion de la contraseña
export const decrypt = (ciphertext) => {
  // almacenando el estandar de incriptacion en uan constante para luego ser usado
  const hash = CryptoJS.SHA256(key);
  // decifrando la contraseña del usuario para luego ser usada para algunas validaciones
  const bytes = CryptoJS.AES.decrypt(ciphertext, hash, {
    mode: CryptoJS.mode.ECB,
  });
  // devuelve la contraseña decencriptada para hacer validaciones posteriormente
  return bytes.toString(CryptoJS.enc.Utf8);
};