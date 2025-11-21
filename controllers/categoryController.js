const Category = require('../models/Category');
const factory = require('./crudController');

exports.createCategory = factory.createOne(Category);
exports.getCategory = factory.getOne(Category);
exports.getAllCategories = factory.getAll(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);