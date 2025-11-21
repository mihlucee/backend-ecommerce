const express = require('express');
const orderController = require('../controllers/orderController');
const validate = require('../middleware/validate');
const { orderSchema } = require('../schemas/orderSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(orderSchema), orderController.createOrder)
  .get(orderController.getAllOrders);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(validate(orderSchema), orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;