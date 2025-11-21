const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome do cliente é obrigatório'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'O email do cliente é obrigatório'],
      unique: true,
      lowercase: true,
    },
    phone: String,
    cpf: {
      type: String,
      unique: true,
      sparse: true, // Permite múltiplos valores nulos
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;