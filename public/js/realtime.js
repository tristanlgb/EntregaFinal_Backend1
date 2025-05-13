const socket = io();

// Listen for product updates
socket.on('products', (products) => {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.title} - $${product.price}`;
    productList.appendChild(li);
  });
});

// Handle form submission
const form = document.getElementById('productForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;

  socket.emit('new-product', { title, price });

  form.reset();
});
