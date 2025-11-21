const express = require('express');
const addressController = require('../controllers/addressController');
const validate = require('../middleware/validate');
const { addressSchema } = require('../schemas/addressSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(addressSchema), addressController.createAddress)
  .get(addressController.getAllAddresses);

router
  .route('/:id')
  .get(addressController.getAddress)
  .patch(validate(addressSchema), addressController.updateAddress)
  .delete(addressController.deleteAddress);

module.exports = router;