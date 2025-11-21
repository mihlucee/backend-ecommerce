const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, 'O código do cupom é obrigatório'],
      unique: true,
      uppercase: true,
    },
    discount: {
      type: Number,
      required: [true, 'O valor do desconto é obrigatório'],
      min: 0,
    },
    discountType: {
      type: String,
      enum: ['percentage', 'fixed'],
      default: 'percentage',
    },
    expiresAt: {
      type: Date,
      required: [true, 'A data de expiração é obrigatória'],
    },
    maxUses: {
      type: Number,
      default: 1,
    },
    usedCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;