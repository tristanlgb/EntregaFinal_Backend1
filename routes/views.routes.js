import express from 'express';
import Product from '../models/Product.js';
import Cart from '../models/Cart.js';

const router = express.Router();

// 🏠 Vista principal: home.handlebars
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().lean();
    console.log('✅ Productos encontrados:', products.length);
    res.render('home', { products });
  } catch (err) {
    console.error('🔴 ERROR EN RUTA /:', err);
    res.status(500).send('Error al cargar la vista principal');
  }
});

// 🧾 Vista paginada de productos: index.handlebars
router.get('/products', async (req, res) => {
  try {
    const { limit = 10, page = 1, sort, query } = req.query;

    const filter = query
      ? { $or: [{ category: query }, { status: query === 'true' }] }
      : {};

    const sortOption = sort === 'asc' ? { price: 1 } : sort === 'desc' ? { price: -1 } : {};

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sortOption,
      lean: true
    };

    if (!Product.paginate) {
      throw new Error('Product.paginate no está definido. ¿Agregaste mongoose-paginate-v2 al schema?');
    }

    const result = await Product.paginate(filter, options);

    res.render('index', {
      products: result.docs,
      totalPages: result.totalPages,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      page: result.page,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage
    });
  } catch (err) {
    console.error('🔴 Error al cargar productos:', err);
    res.status(500).send('Error al cargar los productos');
  }
});

// 📄 Detalle de producto: productDetail.handlebars
router.get('/products/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await Product.findById(pid).lean();
    if (!product) return res.status(404).send('Producto no encontrado');
    res.render('productDetail', { product });
  } catch (err) {
    console.error('🔴 Error al cargar producto:', err);
    res.status(500).send('Error al cargar el producto');
  }
});

// 🛒 Vista de carrito: cart.handlebars
router.get('/carts/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await Cart.findById(cid).populate('products.product').lean();
    if (!cart) return res.status(404).send('Carrito no encontrado');
    res.render('cart', { cart });
  } catch (err) {
    console.error('🔴 Error al cargar carrito:', err);
    res.status(500).send('Error al cargar el carrito');
  }
});

// 🟢 Productos en tiempo real: realTimeProducts.handlebars
router.get('/realtimeproducts', async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.render('realTimeProducts', { products });
  } catch (err) {
    console.error('🔴 Error al cargar realtimeproducts:', err);
    res.status(500).send('Error al cargar productos en tiempo real');
  }
});

export default router;
