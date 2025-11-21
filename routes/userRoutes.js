const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Removendo validate e userSchema temporariamente

router.route('/')
  .post(userController.createUser) // Apenas a função de criação
  .get(userController.getUsers);
 
router.route('/:id')
  .get(userController.getUserById); // Apenas a função de busca
  // Removendo put e delete temporariamente
 
module.exports = router;
