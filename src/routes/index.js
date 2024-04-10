const express = require('express');
const livros = require('./LivroRoutes.js');

const routes = (app) => {
    app.use(
        express.json(),
        livros
    );
};

module.exports = routes;
