const Review = require('../models/Review');
const factory = require('./crudController');

// Popula o produto e o cliente ao obter uma avaliação
exports.getReview = factory.getOne(Review, [
  { path: 'product', select: 'name price' },
  { path: 'customer', select: 'name email' },
]);

exports.createReview = factory.createOne(Review);
exports.getAllReviews = factory.getAll(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);