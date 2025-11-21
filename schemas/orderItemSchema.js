const yup = require('yup');
const mongoose = require('mongoose');

const orderItemSchema = yup.object().shape({
  order: yup
    .string()
    .test('is-mongo-id', 'ID de Pedido inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O ID do pedido é obrigatório'),
  product: yup
    .string()
    .test('is-mongo-id', 'ID de Produto inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O ID do produto é obrigatório'),
  quantity: yup
    .number()
    .min(1, 'A quantidade deve ser no mínimo 1')
    .required('A quantidade é obrigatória'),
  priceAtPurchase: yup
    .number()
    .min(0, 'O preço não pode ser negativo')
    .required('O preço de compra é obrigatório'),
});

module.exports = { orderItemSchema };