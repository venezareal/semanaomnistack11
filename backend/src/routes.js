const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');   
const SessionController = require('./controllers/SessionController');   

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/***
 * ROTAS E RECURSOS
 * 
 * PARA ACESSAR UMA ROTA USA SE O APP.GET
 * 
 * MÉTODOS HTTP:
 * 
 * GET: BUSCAR/LISTAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃÕ NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" ( Filtros, paginação). Parâmetros que a gente envia dentro da url
  * Route Params: Parâmetros utilizados para identificar recursos. Para um único recurso  
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  * 
  * */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */