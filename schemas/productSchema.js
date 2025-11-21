const yup = require('yup');
const mongoose = require('mongoose');

const productSchema = yup.object().shape({
  name: yup.string().required('O nome do produto é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
  price: yup
    .number()
    .min(0, 'O preço não pode ser negativo')
    .required('O preço é obrigatório'),
  stock: yup
    .number()
    .min(0, 'O estoque não pode ser negativo')
    .required('O estoque é obrigatório'),
  category: yup
    .string()
    .test('is-mongo-id', 'ID de Categoria inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('A categoria é obrigatória'),
  supplier: yup
    .string()
    .test('is-mongo-id', 'ID de Fornecedor inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .nullable(),
  createdBy: yup
    .string()
    .test('is-mongo-id', 'ID de Usuário inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O usuário criador é obrigatório'),
});

module.exports = { productSchema };