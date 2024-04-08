const express = require('express')
const livros = require('./PessoaRoutes.js');

const routes = (app) => {
    app.use(
        express.json(),
        pessoas
    )
}

module.exports = routes;