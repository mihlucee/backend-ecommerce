const Coupon = require('../models/Coupon');
const factory = require('./crudController');

exports.createCoupon = factory.createOne(Coupon);
exports.getCoupon = factory.getOne(Coupon);
exports.getAllCoupons = factory.getAll(Coupon);
exports.updateCoupon = factory.updateOne(Coupon);
exports.deleteCoupon = factory.deleteOne(Coupon);