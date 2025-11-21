const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'A avaliação não pode ser vazia'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'A nota é obrigatória'],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'A avaliação deve pertencer a um produto'],
    },
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer',
      required: [true, 'A avaliação deve pertencer a um cliente'],
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;