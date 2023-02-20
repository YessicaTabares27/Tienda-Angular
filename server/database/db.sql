-- creacion de la base de atos
CREATE DATABASE db_angularModa;

-- usar la base de atos
USE db_angularModa;

-- creacion de la tabla de usuario
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  root BOOLEAN,
  address VARCHAR(255)
);

-- creación del registro que contendra la inforamcion del admin
INSERT INTO users (id, username, password, phone, email, root, address) VALUES (1, "admin", "admin12345", "3217829838", "tabaresosorioyessicalucia@gmail.com", true, "admin");

-- creacion de la tabla de productos
CREATE TABLE productos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  details VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  stockMin INT NOT NULL,
  stockMax INT NOT NULL,
  stock INT NOT NULL
);

-- creacion de los registros con la informacion de los productos
INSERT INTO productos(name, details, price, stockMin, stockMax, stock) VALUES 
("Enterizo rojo ", "", 150000.00, 10, 50, 45),
("Enterizo estampado", "", 160000.00, 10, 50, 45),
("Enterizo corto", "", 110000.00, 10, 50, 45),
("Vestido largo floreado", "", 165000.00, 10, 50, 45),
("Vestido corto floreado", "", 95000.00, 10, 50, 45),
("Falda prensada", "", 70000.00, 10, 50, 45),
("Pantalón palazzo", "", 120000.00, 10, 50, 45),
("Short corto", "", 65000.00, 10, 50, 45),
("Jeans azul", "", 100000.00, 10, 50, 45),
("Jeans blanco", "", 100000.00, 10, 50, 45);

-- creacion de la tabla de imagenes
CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  image1 TEXT NOT NULL,
  idProduct INT NOT NULL
);

-- creación de los registros con la información de los productos
INSERT INTO images (image1, idProduct) VALUES
("https://cdn.shopify.com/s/files/1/0504/9424/3011/products/enterizo-arcoiris-rojo-largo-745210.jpg?v=1669958863", 1),
("http://cdn.shopify.com/s/files/1/0421/6661/6214/products/IMG_9527-web_1200x1200.jpg?v=1634313403", 1),
("https://www.petuniaropa.com/wp-content/uploads/2022/09/5Enterizo-Pantalon-Doble-Abertura-Rojo.jpg", 1),

("https://cdn.shopify.com/s/files/1/0561/4629/7019/products/image_83367caf-1fd5-4c21-8104-dafb2d9387ae_1024x1024.jpg?v=1674833866", 2),
("https://cdn.shopify.com/s/files/1/0477/1627/0247/products/ENTERIZO2_2048x2048.jpg?v=1669218878", 2),
("https://dorella.com.co/wp-content/uploads/2023/01/c8ce7800-f1fd-4919-bbdc-98ce072e0a1a.jpg", 2),

("https://http2.mlstatic.com/D_NQ_NP_637548-MCO51744335918_092022-O.jpg", 3),
("https://mercasanare.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-15-at-5.57.49-PM-2.jpeg", 3),
("https://dyaboo.com/wp-content/uploads/2022/11/Medidas-web-2022-11-23T153420.299-1-416x624.png", 3),

("https://i.pinimg.com/236x/5d/25/cb/5d25cbd8890285c5ae17e8f8a541afcb.jpg", 4),
("https://i.pinimg.com/236x/6f/f0/05/6ff0057f1a9b474fd25a169fb54d7e54.jpg", 4),
("https://i.pinimg.com/236x/9e/37/3c/9e373c65d3c04610d6818c2c328a6961.jpg", 4),

("https://www.debate.com.mx/__export/1661382036116/sites/debate/img/2022/08/24/foto-vanessa-christine.jpg_343592219.jpg", 5),
("https://i.pinimg.com/236x/b0/1b/d2/b01bd26f3f8cb168db7b28c9ad926882.jpg", 5),
("https://noticiastu.com/wp-content/uploads/2018/04/Outfits-Floreados-19.jpg", 5),

("https://m.media-amazon.com/images/I/612fYhvDhHL._AC_SX522_.jpg", 6),
("https://http2.mlstatic.com/D_NQ_NP_614882-MPE48358312174_112021-W.jpg", 6),
("https://m.media-amazon.com/images/I/61E4hc0se3S._AC_UF894,1000_QL80_.jpg", 6),

("https://cdn.koaj.co/129711-big_default/pantalon-palazzo.jpg", 7),
("https://www.alcott.eu/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-alcott-master/default/dw80356194/hi-res/PA3707DO_C5620_001.jpg?sw=1000&sh=1350&q=90&strip=false", 7),
("https://fallinlove.es/wp-content/uploads/2022/03/pantalon-palazzo-camel-masavi-2.jpg", 7),

("https://http2.mlstatic.com/D_NQ_NP_829439-MCO48273623928_112021-W.jpg", 8),
("https://http2.mlstatic.com/D_NQ_NP_771653-MLM49062462626_022022-W.jpg", 8),
("https://m.media-amazon.com/images/I/71qBW-OBRpL._AC_UX569_.jpg", 8),

("https://xuss.vteximg.com.br/arquivos/ids/167798-278-416/jean-mujer-xuss-je-0013-azuloscuro-2.jpg?v=637720695821170000", 9),
("https://static.dafiti.com.co/p/atypical-8226-3826371-1-product.jpg", 9),
("https://www.modarm.com/medias/000005000000844927-1200x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wzMzUwNzV8aW1hZ2UvanBlZ3xoNDYvaDIxLzEzMjExMzE0OTEzMzEwLzAwMDAwNTAwMDAwMDg0NDkyNy0xMjAweDEyMDBfMC5qcGd8ZDhlZDIwYTUzOWQyMjJhNGJlOGM5YmE0MDg0Njg3NDZhMTMwOTk2NjFkZGM5NTA5NGE0ZWM0MTY0NjcxMTc3ZA", 9),

("https://crjeans.com.co/wp-content/uploads/2020/06/716071.jpg", 10),
("https://elaco.vteximg.com.br/arquivos/ids/584252-700-1025/-elaco-producto-Skinny-BLANCO-E135474O-1.jpg?v=637907550008770000", 10),
("https://http2.mlstatic.com/D_NQ_NP_860435-MLM53163359390_012023-W.jpg", 10);