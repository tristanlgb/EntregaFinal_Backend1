Entrega Final Backend Flex 1 - Tristan Lenzberg
Este proyecto consiste en el desarrollo del backend para una aplicación de e-commerce utilizando Node.js, Express y MongoDB, siguiendo el patrón de arquitectura MVC, con persistencia en MongoDB mediante Mongoose y vistas con Handlebars.

📦 Funcionalidades implementadas
✅ Productos
Vista /products con listado paginado de productos.

Filtro por categoría o disponibilidad usando query params.

Ordenamiento ascendente o descendente por precio.

API REST completa:

GET /api/products con paginación, filtros y ordenamiento.

GET /api/products/:pid

POST /api/products

PUT /api/products/:pid

DELETE /api/products/:pid

🛒 Carrito
Vista /carts/:cid que muestra productos del carrito con populate.

API REST funcional:

POST /api/carts crea carrito vacío.

GET /api/carts/:cid devuelve carrito completo con productos.

POST /api/carts/:cid/product/:pid agrega producto al carrito.

PUT /api/carts/:cid actualiza todo el contenido del carrito.

PUT /api/carts/:cid/products/:pid actualiza la cantidad de un producto.

DELETE /api/carts/:cid/products/:pid elimina un producto específico.

DELETE /api/carts/:cid vacía el carrito.

🔐 Validaciones y errores
Captura de errores en todas las rutas con try/catch.

Middleware global para manejar errores del servidor.

Validación recomendada: campos obligatorios en POST /api/products.

🗂️ Arquitectura del proyecto
Patrón MVC: controladores, modelos, rutas y vistas claramente separados.

Rutas organizadas por dominio.

Persistencia mediante MongoDB Atlas usando Mongoose.

Handlebars para renderizar vistas con paginación funcional.

⚙️ Tecnologías usadas
Node.js + Express

MongoDB + Mongoose

Handlebars

dotenv

mongoose-paginate-v2

🚀 Cómo iniciar el proyecto
Clonar el repositorio.

Crear un archivo .env con las siguientes variables:

ini
Copiar
Editar
PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<tu-cluster>.mongodb.net/<nombre-db>
Instalar las dependencias:

bash
Copiar
Editar
npm install
Ejecutar el servidor:

bash
Copiar
Editar
npm start
👨‍💻 Autor
Tristan Lenzberg
Proyecto Final - Coderhouse Backend Flex 1
