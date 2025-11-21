const express = require('express');
const couponController = require('../controllers/couponController');
const validate = require('../middleware/validate');
const { couponSchema } = require('../schemas/couponSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(couponSchema), couponController.createCoupon)
  .get(couponController.getAllCoupons);

router
  .route('/:id')
  .get(couponController.getCoupon)
  .patch(validate(couponSchema), couponController.updateCoupon)
  .delete(couponController.deleteCoupon);

module.exports = router;