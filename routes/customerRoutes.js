const express = require('express');
const customerController = require('../controllers/customerController');
const validate = require('../middleware/validate');
const { customerSchema } = require('../schemas/customerSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(customerSchema), customerController.createCustomer)
  .get(customerController.getAllCustomers);

router
  .route('/:id')
  .get(customerController.getCustomer)
  .patch(validate(customerSchema), customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;