const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer',
      required: [true, 'O cliente é obrigatório'],
    },
    street: {
      type: String,
      required: [true, 'A rua é obrigatória'],
    },
    number: {
      type: String,
      required: [true, 'O número é obrigatório'],
    },
    complement: String,
    city: {
      type: String,
      required: [true, 'A cidade é obrigatória'],
    },
    state: {
      type: String,
      required: [true, 'O estado é obrigatório'],
    },
    zipCode: {
      type: String,
      required: [true, 'O CEP é obrigatório'],
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;