const express = require('express');
const productController = require('../controllers/productController');
const validate = require('../middleware/validate');
const { productSchema } = require('../schemas/productSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(productSchema), productController.createProduct)
  .get(productController.getAllProducts);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(validate(productSchema), productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;