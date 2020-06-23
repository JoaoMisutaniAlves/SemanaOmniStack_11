const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        texto: "Hello World!",
        evento: "Semana Omnistack 11.0",
        aluno: "João Misutani"
    });
});

module.exports = routes;