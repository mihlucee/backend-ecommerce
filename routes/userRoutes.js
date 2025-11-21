const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validate = require('../middleware/validate');
const userSchema = require('../schemas/userSchema');
 
router.route('/')
  .post(validate(userSchema), userController.createUser)
  .get(userController.getUsers);
 
router.route('/:id')
  .get(userController.getUserById)
  .put(validate(userSchema), userController.updateUser)
  .delete(userController.deleteUser);
 
module.exports = router;