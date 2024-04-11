const express = require('express');
const livros = require('./LivroRoutes.js');
const autores = require('./AutorRoutes.js');
const editoras = require('./EditoraRoutes.js');

const routes = (app) => {
    app.use(
        express.json(),
        livros,
        autores,
        editoras
    );
};

module.exports = routes;
