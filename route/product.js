const express = require('express');
const {createProduct, getProduct, getProductById, updateProduct, deleteProduct} = require('../controllers/product')


const productRouter = express.Router();
productRouter.get('/', getProduct)
productRouter.post('/', createProduct)
productRouter.get('/:id', getProductById)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)


module.exports = productRouter