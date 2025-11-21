const express = require('express');
const supplierController = require('../controllers/supplierController');
const validate = require('../middleware/validate');
const { supplierSchema } = require('../schemas/supplierSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(supplierSchema), supplierController.createSupplier)
  .get(supplierController.getAllSuppliers);

router
  .route('/:id')
  .get(supplierController.getSupplier)
  .patch(validate(supplierSchema), supplierController.updateSupplier)
  .delete(supplierController.deleteSupplier);

module.exports = router;