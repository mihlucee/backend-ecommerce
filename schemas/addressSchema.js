const yup = require('yup');
const mongoose = require('mongoose');

const addressSchema = yup.object().shape({
  customer: yup
    .string()
    .test('is-mongo-id', 'ID de Cliente inválido', (value) =>
      mongoose.Types.ObjectId.isValid(value)
    )
    .required('O ID do cliente é obrigatório'),
  street: yup.string().required('A rua é obrigatória'),
  number: yup.string().required('O número é obrigatório'),
  complement: yup.string().nullable(),
  city: yup.string().required('A cidade é obrigatória'),
  state: yup.string().required('O estado é obrigatório'),
  zipCode: yup.string().required('O CEP é obrigatório'),
  isDefault: yup.boolean().nullable(),
});

module.exports = { addressSchema };