const {Routes} = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const routes = Router();

routes.get('/pessoas', PessoaController.getPessoas);

module.exports = routes;