const Customer = require('../models/Customer');
const factory = require('./crudController');

exports.createCustomer = factory.createOne(Customer);
exports.getCustomer = factory.getOne(Customer);
exports.getAllCustomers = factory.getAll(Customer);
exports.updateCustomer = factory.updateOne(Customer);
exports.deleteCustomer = factory.deleteOne(Customer);