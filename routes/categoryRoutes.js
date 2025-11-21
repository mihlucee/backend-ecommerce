const express = require('express');
const categoryController = require('../controllers/categoryController');
const validate = require('../middleware/validate');
const { categorySchema } = require('../schemas/categorySchema');

const router = express.Router();

router
  .route('/')
  .post(validate(categorySchema), categoryController.createCategory)
  .get(categoryController.getAllCategories);

router
  .route('/:id')
  .get(categoryController.getCategory)
  .patch(validate(categorySchema), categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;