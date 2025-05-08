import { Server } from 'socket.io';

let io;

export const initSocket = (server) => {
  io = new Server(server);

  io.on('connection', (socket) => {
    console.log('🔌 New client connected');

    socket.on('new-product', async (product) => {
      const fs = await import('fs');
      const path = await import('path');
      const __dirname = path.dirname(new URL(import.meta.url).pathname);
      const productsPath = path.join(__dirname, 'data', 'products.json');
      
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
      const newProduct = { ...product, id: Date.now() };
      products.push(newProduct);
      fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

      io.emit('products', products);
    });
  });

  return io;
};

export const getSocket = () => io;
