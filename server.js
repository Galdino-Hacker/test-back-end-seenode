const express = require('express');
const cors = require('cors')

const app = express();


app.use(cors());

const PORTA = 3000;


app.get('/api', (req, res) => {
    const isSuccessful = true;

    if (isSuccessful) {
        res.status(200).send('Deu certo!'); 
    } else {
        res.status(404).send('Deu errado');
    }
});


app.listen(PORTA, () => {
    console.log('Servidor rodando')
});