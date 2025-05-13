import { Router } from 'express';
import {
  getCartById,
  createCart,
  addProductToCart,
  deleteProductFromCart,
  updateCart,
  updateProductQuantity,
  emptyCart
} from '../controllers/cart.controller.js';

const router = Router();

router.post('/', createCart);
router.get('/:cid', getCartById);
router.post('/:cid/product/:pid', addProductToCart);
router.put('/:cid', updateCart);
router.put('/:cid/products/:pid', updateProductQuantity);
router.delete('/:cid/products/:pid', deleteProductFromCart);
router.delete('/:cid', emptyCart);

export default router;
