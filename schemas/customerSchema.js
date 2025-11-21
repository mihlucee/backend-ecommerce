const yup = require('yup');

const customerSchema = yup.object().shape({
  name: yup.string().required('O nome do cliente é obrigatório'),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  phone: yup.string().nullable(),
  cpf: yup.string().nullable(),
});

module.exports = { customerSchema };