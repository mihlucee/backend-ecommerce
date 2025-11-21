const yup = require('yup');
const mongoose = require('mongoose');

const reviewSchema = yup.object().shape({
  review: yup.string().required('A avaliação não pode ser vazia'),
  rating: yup
    .number()
    .min(1, 'A nota deve ser no mínimo 1')
    .max(5, 'A nota deve ser no máximo 5')
    .required('A nota é obrigatória'),
  product: yup
    .string()
    .test('is-mongo-id', 'ID de Produto inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O ID do produto é obrigatório'),
  customer: yup
    .string()
    .test('is-mongo-id', 'ID de Cliente inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O ID do cliente é obrigatório'),
});

module.exports = { reviewSchema };