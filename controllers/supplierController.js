const Supplier = require('../models/Supplier');
const factory = require('./crudController');

exports.createSupplier = factory.createOne(Supplier);
exports.getSupplier = factory.getOne(Supplier);
exports.getAllSuppliers = factory.getAll(Supplier);
exports.updateSupplier = factory.updateOne(Supplier);
exports.deleteSupplier = factory.deleteOne(Supplier);