const Address = require('../models/Address');
const factory = require('./crudController');

// Popula o cliente ao obter um endereço
exports.getAddress = factory.getOne(Address, {
  path: 'customer',
  select: 'name email',
});

exports.createAddress = factory.createOne(Address);
exports.getAllAddresses = factory.getAll(Address);
exports.updateAddress = factory.updateOne(Address);
exports.deleteAddress = factory.deleteOne(Address);