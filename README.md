# Backend E-commerce (Trabalho P2)

Este projeto consiste na implementação de um backend completo para um sistema de e-commerce, utilizando Node.js, Express e MongoDB (Mongoose). O projeto atende aos requisitos de implementação de 10 operações CRUD (Create, Read, Update, Delete) em 10 entidades distintas, com modelagem de dados, validações e documentação.

## 1. Tecnologias Utilizadas

*   **Linguagem:** JavaScript (Node.js)
*   **Framework Web:** Express
*   **Banco de Dados:** MongoDB (Atlas)
*   **ORM/ODM:** Mongoose
*   **Validação:** Yup
*   **Variáveis de Ambiente:** `dotenv`

## 2. Estrutura do Projeto

O projeto segue a arquitetura MVC (Model-View-Controller) adaptada para APIs:

backend-ecommerce/
├── config/             # Configurações de conexão com o banco de dados
├── controllers/        # Lógica de negócio (CRUDs)
├── docs/               # Documentação (Postman Collection, Diagrama)
├── middleware/         # Funções intermediárias (Ex: Validação com Yup)
├── models/             # Schemas e Modelos do Mongoose (Entidades)
├── node_modules/       # Dependências do Node.js
├── routes/             # Definição das rotas da API
├── schemas/            # Schemas de validação com Yup
├── .env                # Variáveis de ambiente (IGNORADO PELO GIT)
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos e pastas a serem ignorados pelo Git
├── package.json        # Metadados e dependências do projeto
└── server.js           # Arquivo principal de inicialização do servidor


## 3. Entidades e Modelagem de Dados

O sistema é baseado em 10 entidades com relacionamentos definidos:

| # | Entidade (Collection) | Relacionamentos Principais | Responsável |
| :---: | :--- | :--- | :--- |
| 1 | **Usuário** (`User`) | 1:N com `Produto` (quem cadastrou) | Fabrício |
| 2 | **Cliente** (`Customer`) | 1:N com `Pedido`, 1:N com `Endereço` | Você |
| 3 | **Categoria** (`Category`) | 1:N com `Produto` | Fabrício |
| 4 | **Produto** (`Product`) | N:1 com `Categoria`, N:1 com `Usuário`, N:1 com `Fornecedor` | Você |
| 5 | **Pedido** (`Order`) | N:1 com `Cliente`, 1:N com `ItemPedido`, N:1 com `Cupom` | Fabrício |
| 6 | **ItemPedido** (`OrderItem`) | N:1 com `Pedido`, N:1 com `Produto` | Você |
| 7 | **Endereço** (`Address`) | N:1 com `Cliente` | Fabrício |
| 8 | **Fornecedor** (`Supplier`) | 1:N com `Produto` | Você |
| 9 | **Avaliação** (`Review`) | N:1 com `Produto`, N:1 com `Cliente` | Fabrício |
| 10 | **Cupom** (`Coupon`) | 1:N com `Pedido` | Você |

## 4. Como Rodar o Projeto

### Pré-requisitos

*   Node.js (versão 18+)
*   MongoDB Atlas (Conta e Cluster)
*   Git

### 4.1. Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/mihlucee/backend-ecommerce.git
    cd backend-ecommerce
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

### 4.2. Configuração do Banco de Dados

1.  Crie o arquivo `.env` na raiz do projeto.
2.  Copie o conteúdo do `.env.example` para o `.env`.
3.  Substitua a variável `MONGO_URI` pela sua string de conexão do MongoDB Atlas.

### 4.3. Inicialização do Servidor

```bash
npm start
