## Aplicação Despesas - Teste Prático OnFLy

### Sobre a aplicação

A aplicação consiste em um cadastro de despesas utilizando uma api rest e autenticação com jwt!

## Instruções para rodar a aplicação em docker

- Na raiz do projeto execute o comando: **docker-compose up --build** para subir os contêiner

### Uso de Migrate

- Foi criado migrate para as tabelas necessárias (execute os comandos dentro do contêiner api usando o comando de acesso **docker exec -it api bash** assim que os conteiner subirem)
  - npx sequelize-cli db:migrate

### Algumas das tecnologias e bibliotecas utilizadas

- ### Express
- ### Typescript
- ### JWT
- ### express-validator
- ### Docker

### Endereços da aplicação:
- Projeto Api  localhost:3001

### Rotas da aplicação

### POST http://localhost:3001/api/auth/register

- Cria um novo usuário

```json
{
  "name" : "teste"
	"email" : "teste@hotmail.com",
  "password" : "123123"
}
```

### POST http://localhost:3001/api/auth/login

- Autentica o usuário informado

```json
{
	"email" : "teste@hotmail.com",
  "password" : "123123"
}
```
### POST http://localhost:3001/api/expenses

- Cria uma despesa pertencente ao usuario logado

```json
{
  "description" : "testt",
  "date" : "2024-05-28",
  "value" : 55.87
}
```
### PUT http://localhost:3001/api/expenses/:id

- Atualiza uma despesa pertencente ao usuario logado

```json
{
  "description" : "teste atualizar",
  "date" : "2024-05-28",
  "value" : 55.87
}
```

### DELETE http://localhost:3001/api/expenses/:id

- Exclui uma despesa do usuario logado

### GET http://localhost:3001/api/expenses/:id

- Lista uma despesa do usuario logado

### GET http://localhost:3001/api/expenses

- Lista todas as despesas do usuario logado
