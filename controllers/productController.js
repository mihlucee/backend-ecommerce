const Product = require('../models/Product');
const factory = require('./crudController');

// Popula a categoria e o criador ao obter um produto
exports.getProduct = factory.getOne(Product, [
  { path: 'category', select: 'name' },
  { path: 'createdBy', select: 'name email' },
  { path: 'reviews' }, // Popula as avaliações (virtual)
]);

exports.createProduct = factory.createOne(Product);
exports.getAllProducts = factory.getAll(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);