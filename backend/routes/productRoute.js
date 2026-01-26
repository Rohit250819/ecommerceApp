import express from 'express'
import {listProducts, singleProduct, removeProduct, addProduct} from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProducts);

export default productRouter;