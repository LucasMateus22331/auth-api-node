# 🔐 Auth API Node

API de autenticação desenvolvida com **Node.js, Express e TypeScript**, utilizando **JWT (JSON Web Token)** para controle de acesso e proteção de rotas.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- JWT (jsonwebtoken)
- Bcrypt
- ts-node-dev

---

## 📌 Funcionalidades

✅ Registro de usuário  
✅ Login com geração de token JWT  
✅ Proteção de rotas com middleware  
✅ Estrutura organizada em camadas (Controller, Service, Middleware)  
✅ Tipagem personalizada no Express  

---

## 📂 Estrutura do Projeto

```bash
src/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── types/
└── server.ts
```
## ⚙️ Como Executar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/LucasMateus22331/auth-api-node.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd auth-api-node
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione:

```
JWT_SECRET=sua_chave_secreta
PORT=3000
```

### 5️⃣ Execute o servidor

```bash
npm run dev
```

O servidor estará disponível em:
Obs > Executar duas vezes dara um erro, ( servidor em uso)

```
http://localhost:3000
```
🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em aprendizado e prática de e aprender detalhadamente como funciona um serviço de autenticação :

Autenticação com JWT

Organização de API em camadas

Tipagem avançada com TypeScript

Boas práticas no desenvolvimento backend

*  👨‍💻 Autor  *

Lucas Mateus
GitHub: https://github.com/LucasMateus22331

LinkedIn: www.linkedin.com/in/lucas-mateus-0bbab7281


usem em projetos reais e treinem

*Obs: tente rodar com o CMD e tenha paciencia se der erro, procure baixar as dependencias *
( esse projeto vai ser usado para um login de autenticacao de dois fatores)
