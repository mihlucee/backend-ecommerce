const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome do fornecedor é obrigatório'],
      trim: true,
    },
    contactEmail: {
      type: String,
      unique: true,
      lowercase: true,
    },
    phone: String,
    cnpj: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;