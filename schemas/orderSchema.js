const yup = require('yup');
const mongoose = require('mongoose');

const orderSchema = yup.object().shape({
  customer: yup
    .string()
    .test('is-mongo-id', 'ID de Cliente inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O ID do cliente é obrigatório'),
  status: yup
    .string()
    .oneOf(
      ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      'Status inválido'
    )
    .nullable(),
  totalAmount: yup.number().min(0, 'O valor total não pode ser negativo').nullable(),
  coupon: yup
    .string()
    .test('is-mongo-id', 'ID de Cupom inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .nullable(),
});

module.exports = { orderSchema };