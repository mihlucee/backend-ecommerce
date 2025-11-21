const User = require('../models/User');
const crudController = require('./crudController');
 
// O controlador de usuário usa as funções genéricas do crudController
const userController = {
  createUser: crudController.createOne(User),
  getUsers: crudController.getAll(User),
  getUserById: crudController.getOne(User),
  updateUser: crudController.updateOne(User),
  deleteUser: crudController.deleteOne(User),
};
 
module.exports = userController;