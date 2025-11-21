const express = require('express');
const orderItemController = require('../controllers/orderItemController');
const validate = require('../middleware/validate');
const { orderItemSchema } = require('../schemas/orderItemSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(orderItemSchema), orderItemController.createOrderItem)
  .get(orderItemController.getAllOrderItems);

router
  .route('/:id')
  .get(orderItemController.getOrderItem)
  .patch(validate(orderItemSchema), orderItemController.updateOrderItem)
  .delete(orderItemController.deleteOrderItem);

module.exports = router;