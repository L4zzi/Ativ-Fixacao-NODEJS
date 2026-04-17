# Atividade Dirigida: Node.js + MySQL (Arquitetura MVC)

 O objetivo principal é aplicar os conceitos de separação em camadas, modularização e operações básicas de banco de dados (CRUD).

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript.
* **Express**: Framework web para criação de rotas e middlewares.
* **MySQL**: Banco de dados relacional.
* **Dotenv**: Gerenciamento de variáveis de ambiente.
* **Nodemon**: Ferramenta de auxílio ao desenvolvimento (reinicio automático).

---

## 🏗️ Estrutura do Projeto e Fluxo de Dados

O projeto segue o padrão de arquitetura em camadas (MVC), garantindo que cada parte do código tenha uma responsabilidade única.

### Estrutura de Pastas

<img width="1275" height="609" alt="image" src="https://github.com/user-attachments/assets/77a93f53-44b2-422b-8549-77fdf7e3f77a" />


### Fluxo de Funcionamento
A requisição percorre o seguinte caminho:
**Rota** ➡️ **Controller** ➡️ **Service** ➡️ **Repository** ➡️ **Banco de Dados**

<img width="1268" height="691" alt="image" src="https://github.com/user-attachments/assets/2fd265d6-11cf-4ca1-9203-318c72f969b0" />


---
### Testando as Rotas (Postman)
Abaixo, um exemplo da requisição POST realizada para cadastrar um novo cliente com sucesso:

<img width="1415" height="1138" alt="image" src="https://github.com/user-attachments/assets/21ee2900-7792-4658-8661-796afa189273" />


## 🛠️ Como Rodar o Projeto

Siga os passos abaixo para configurar o ambiente em sua máquina:

### 1. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e preencha com suas credenciais:
``
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=nome_db
DB_PORT=3306
PORT=4000

### 2. Clonar o repositório
```bash
git clone https://github.com/L4zzi/Ativ-Fixacao-NODEJS.git
`
### 2. Instalar Dependências e Iniciar
No terminal, na raiz do projeto:


# Instalar as dependências
npm install

# Iniciar o servidor em modo de desenvolvimento
npm run dev

