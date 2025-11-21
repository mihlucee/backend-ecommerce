// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Carrega variáveis de ambiente
dotenv.config();

// Conecta ao banco de dados
connectDB();

const app = express();

// Middleware para aceitar JSON no corpo da requisição
app.use(express.json());

// Rota de Teste
app.get('/', (req, res) => {
  res.send('API de E-commerce Rodando...');
});

// Rotas
const userRoutes = require('./routes/userRoutes');
app.use('/api/v1/users', userRoutes);

const customerRoutes = require('./routes/customerRoutes');
app.use('/api/v1/customers', customerRoutes);

const categoryRoutes = require('./routes/categoryRoutes'); 
app.use('/api/v1/categories', categoryRoutes);

const productRoutes = require('./routes/productRoutes'); 
app.use('/api/v1/products', productRoutes);

const supplierRoutes = require('./routes/supplierRoutes');
app.use('/api/v1/suppliers', supplierRoutes);

const addressRoutes = require('./routes/addressRoutes'); 
app.use('/api/v1/addresses', addressRoutes);

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/v1/reviews', reviewRoutes);

const couponRoutes = require('./routes/couponRoutes'); 
app.use('/api/v1/coupons', couponRoutes);

const orderItemRoutes = require('./routes/orderItemRoutes');
app.use('/api/v1/order-items', orderItemRoutes);

const orderRoutes = require('./routes/orderRoutes'); 
app.use('/api/v1/orders', orderRoutes);

// ----------------------------------------------------------------
// MIDDLEWARE DE TRATAMENTO DE ERROS (DEVE SER O ÚLTIMO)
// ----------------------------------------------------------------

// 1. Middleware para lidar com rotas não encontradas (404)
app.all('*', (req, res, next) => {
  const err = new Error(`Não foi possível encontrar ${req.originalUrl} neste servidor!`);
  err.statusCode = 404;
  next(err);
});

// 2. Middleware de tratamento de erros global
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// ----------------------------------------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
