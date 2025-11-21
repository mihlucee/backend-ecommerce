const express = require('express');
const reviewController = require('../controllers/reviewController');
const validate = require('../middleware/validate');
const { reviewSchema } = require('../schemas/reviewSchema');

const router = express.Router();

router
  .route('/')
  .post(validate(reviewSchema), reviewController.createReview)
  .get(reviewController.getAllReviews);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(validate(reviewSchema), reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;