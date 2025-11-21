const yup = require('yup');

const categorySchema = yup.object().shape({
  name: yup.string().required('O nome da categoria é obrigatório'),
  description: yup.string().nullable(),
});

module.exports = { categorySchema };