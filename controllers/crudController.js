// controllers/crudController.js
const asyncHandler = require('express-async-handler');

// Função genérica para criar um novo documento
const createOne = (Model) => asyncHandler(async (req, res) => {
  const doc = await Model.create(req.body);
  res.status(201).json(doc);
});

// Função genérica para obter todos os documentos
const getAll = (Model) => asyncHandler(async (req, res) => {
  const docs = await Model.find({});
  res.status(200).json(docs);
});

// Função genérica para obter um documento por ID
const getOne = (Model) => asyncHandler(async (req, res) => {
  const doc = await Model.findById(req.params.id);

  if (!doc) {
    res.status(404);
    throw new Error('Recurso não encontrado');
  }

  res.status(200).json(doc);
});

// Função genérica para atualizar um documento por ID
const updateOne = (Model) => asyncHandler(async (req, res) => {
  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    res.status(404);
    throw new Error('Recurso não encontrado');
  }

  res.status(200).json(doc);
});

// Função genérica para deletar um documento por ID
const deleteOne = (Model) => asyncHandler(async (req, res) => {
  const doc = await Model.findByIdAndDelete(req.params.id);

  if (!doc) {
    res.status(404);
    throw new Error('Recurso não encontrado');
  }

  res.status(200).json({ message: 'Recurso removido com sucesso' });
});

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};