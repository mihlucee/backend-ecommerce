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

// Rotas (Serão adicionadas na Seção 3)
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

// app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
