const express = require('express')

const app = express();

app.get('/', (request,response) =>{
return response.json({
    texto: "Hello Word!",
    evento: "Semana OmniStack 11.0",
    aluno: "João Misutani"
});
});

app.listen(3333);
