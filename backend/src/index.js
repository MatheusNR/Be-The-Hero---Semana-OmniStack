const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 *      Rota      /Recurso(busca desejada) 
 * localhost:33333/Users

 * Métodos HTTP:
 * GET:    Buscar uma informação do back-end.
 * POST:    Criar uma informação no back-end.
 * PUT:   Alterar uma informação no back-end.
 * DELETE: Apagar uma informação no back-end.

 * Tipos de parâmetros:
 * Query params: Parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *
 * Parâmetros que podem ser utilizados:
 * Query params:
 *   app.get('/Users', (request, response) => {
 *   const params = request.query
 * 
 * Route params:
 *   app.get('/Users/:id', (request, response) => {
 *   const params = request.params
 * 
 * Request body (criação/alteração de um usuário por exemplo):
 * É necessário adicionar app.use(express.json()); no escopo da aplicação para que o método post funcione
 *   app.post('/Users', (request, response) => {
 *   const body = request.body;
 *
 * Bancos de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM USERS
 * Query Builder: table('USERS').select('*').where()
 * 
 * Entidades(dados que serão armazenados no banco de dados):
 * ONG
 * Caso(incident)
 * 
 * Funcionalidades(ações que serão possíveis):
 * Login da ONG
 * Logout da ONG
 * Cadastro da ONG
 * Cadastrar novos casos
 * Deletar casos existentes
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
*/