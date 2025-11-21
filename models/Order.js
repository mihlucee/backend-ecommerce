const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer',
      required: [true, 'O pedido deve pertencer a um cliente'],
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    totalAmount: {
      type: Number,
      required: [true, 'O valor total é obrigatório'],
      min: 0,
    },
    coupon: {
      type: mongoose.Schema.ObjectId,
      ref: 'Coupon',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate para Itens do Pedido (OrderItems)
orderSchema.virtual('items', {
  ref: 'OrderItem',
  foreignField: 'order',
  localField: '_id',
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;