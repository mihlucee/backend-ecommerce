const yup = require('yup');

const supplierSchema = yup.object().shape({
  name: yup.string().required('O nome do fornecedor é obrigatório'),
  contactEmail: yup.string().email('Email inválido').nullable(),
  phone: yup.string().nullable(),
  cnpj: yup.string().nullable(),
});

module.exports = { supplierSchema };