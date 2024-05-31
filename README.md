## Aplicação Despesas - Teste Prático OnFLy

### Sobre a aplicação

A aplicação consiste em um cadastro de despesas utilizando uma api rest e autenticação com jwt!

## Instruções para rodar a aplicação em docker

- Primeiro, navegue ate a pasta api e crie uma copia do arquivo **.env.example** com o nome de **.env**, ja deixei as credenciais de e-mail previamente cadastrada, irei enviar a senha do mesmo no e-mail para a recrutadora, o e-mail que criei **testeonfly@outlook.com** é somente para facilitar o teste da aplicação
- Após ajustar o .env com a senha do e-mail, volte para a raiz do projeto onde tem o **docker-compose.yml** e execute o comando: **docker-compose up --build** para subir os contêiner

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
