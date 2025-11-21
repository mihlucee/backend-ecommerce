const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome do produto é obrigatório'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'A descrição é obrigatória'],
    },
    price: {
      type: Number,
      required: [true, 'O preço é obrigatório'],
      min: 0,
    },
    stock: {
      type: Number,
      required: [true, 'O estoque é obrigatório'],
      min: 0,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'A categoria é obrigatória'],
    },
    supplier: {
      type: mongoose.Schema.ObjectId,
      ref: 'Supplier',
      // O Fornecedor será criado depois, mas o relacionamento já está aqui
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'O usuário criador é obrigatório'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate para Avaliações (Reviews)
productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id',
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;