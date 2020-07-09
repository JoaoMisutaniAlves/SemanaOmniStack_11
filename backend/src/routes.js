const express = require('express');
const ongs_controller = require('./controllers/ongs_controller');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        texto: "Hello World!",
        evento: "Semana Omnistack 11.0",
        aluno: "João Misutani"
    });
});
//Rotas para ONGs
routes.post('/ongs', ongs_controller.create);
routes.get('/ongs', ongs_controller.read);
routes.put('/ongs', ongs_controller.update);
routes.delete('/ongs', ongs_controller.delete);

//Rotas para Incidents
routes.post('/incidents', incidents_controller.create);
routes.get('/incidents', incidents_controller.read);
routes.put('/incidents', incidents_controller.update);
routes.delete('/incidents', incidents_controller.delete);

module.exports = routes;
