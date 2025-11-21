const OrderItem = require('../models/OrderItem');
const factory = require('./crudController');

// Popula o produto ao obter um item de pedido
exports.getOrderItem = factory.getOne(OrderItem, {
  path: 'product',
  select: 'name price',
});

exports.createOrderItem = factory.createOne(OrderItem);
exports.getAllOrderItems = factory.getAll(OrderItem);
exports.updateOrderItem = factory.updateOne(OrderItem);
exports.deleteOrderItem = factory.deleteOne(OrderItem);