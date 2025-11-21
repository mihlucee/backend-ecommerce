const yup = require('yup');

const couponSchema = yup.object().shape({
  code: yup.string().required('O código do cupom é obrigatório'),
  discount: yup
    .number()
    .min(0, 'O desconto não pode ser negativo')
    .required('O desconto é obrigatório'),
  discountType: yup
    .string()
    .oneOf(['percentage', 'fixed'], 'Tipo de desconto inválido')
    .required('O tipo de desconto é obrigatório'),
  expiresAt: yup
    .date()
    .min(new Date(), 'A data de expiração deve ser futura')
    .required('A data de expiração é obrigatória'),
  maxUses: yup.number().min(1, 'O uso máximo deve ser no mínimo 1').nullable(),
  usedCount: yup.number().min(0).nullable(),
});

module.exports = { couponSchema };