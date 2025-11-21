const Order = require('../models/Order');
const factory = require('./crudController');

// Popula o cliente e os itens do pedido ao obter um pedido
exports.getOrder = factory.getOne(Order, [
  { path: 'customer', select: 'name email' },
  { path: 'coupon', select: 'code discount' },
  { path: 'items' }, // Popula os itens (virtual)
]);

exports.createOrder = factory.createOne(Order);
exports.getAllOrders = factory.getAll(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);