const { Router } = require('express');
const LivroController = require('../controllers/LivroController.js');

const routes = Router();

routes.get('/pessoas', LivroController.getLivros);

module.exports = routes;
