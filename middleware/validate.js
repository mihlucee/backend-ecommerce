// middleware/validate.js
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    // Formata os erros do Yup para uma resposta mais limpa
    const errors = error.inner.map(err => ({
      path: err.path,
      message: err.message,
    }));
    res.status(400).json({ errors });
  }
};

module.exports = validate;