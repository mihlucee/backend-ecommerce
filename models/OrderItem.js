const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.ObjectId,
      ref: 'Order',
      required: [true, 'O item deve pertencer a um pedido'],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'O item deve ter um produto'],
    },
    quantity: {
      type: Number,
      required: [true, 'A quantidade é obrigatória'],
      min: 1,
    },
    priceAtPurchase: {
      type: Number,
      required: [true, 'O preço de compra é obrigatório'],
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;