# 🛒 Entrega 2 - Backend con Websockets y Handlebars

Este proyecto es parte del curso de **Backend en Coderhouse**. El objetivo principal es construir un servidor Express.js que permita gestionar productos en tiempo real utilizando **Websockets (Socket.io)** y renderizar vistas dinámicas con **Handlebars** como motor de plantillas.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Socket.io
- Express-Handlebars
- JavaScript
- HTML y CSS
- File System (persistencia con archivos .json)

---

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app.js               # Configuración principal del servidor
│   ├── routes/
│   │   ├── views.router.js  # Ruta para renderizar vistas
│   │   └── products.router.js  # Ruta para API de productos
│   ├── public/              # Archivos estáticos
│   ├── views/               # Plantillas Handlebars
│   │   ├── home.handlebars
│   │   └── realTimeProducts.handlebars
│   └── utils/
│       └── ProductManager.js # Clase para manejar los productos desde el archivo .json
├── products.json            # Archivo de persistencia con productos
└── package.json
```

---

## 📌 Funcionalidades

### 🌐 Vistas

- **Home (`/`)**: Muestra una lista de productos cargados desde `products.json` usando Handlebars.
- **RealTimeProducts (`/realtimeproducts`)**: Lista de productos en tiempo real que se actualiza automáticamente cuando se agrega o elimina un producto, gracias a **Socket.io**.

### 🧩 Websockets

- Cada vez que se agrega o elimina un producto mediante el formulario en la vista `/realtimeproducts`, se emite un evento por Websocket que actualiza la lista de productos en todos los clientes conectados.

### 🧪 API de Productos (`/api/products`)

- `GET /api/products`: Lista todos los productos.
- `POST /api/products`: Agrega un nuevo producto.
- `DELETE /api/products/:id`: Elimina un producto por ID.

---

## ⚙️ Instrucciones para Ejecutar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tristanlgb/Entrega2-Backend1
   cd Entrega2-Backend1
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor:
   ```bash
   npm start
   ```

4. Abre el navegador en:
   ```
   http://localhost:8080/
   ```

---

## 📦 Mejoras Futuras

- Validación de datos en el formulario
- Implementación de autenticación de usuarios
- Almacenamiento en base de datos (MongoDB)

---

## 👨‍💻 Autor

**Tristan Lenzberg**  
Desarrollador Full Stack  
[GitHub](https://github.com/tristanlgb)
