const express = require('express');
const sequelize = require('./config/db');
const Cliente = require('./models/Clientes'); // Importando o modelo cliente

const app = express();

// Testando conexão com o banco de dados
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');
    })
    .catch((err) => {
        console.error('Não foi possível conectar com o banco de dados: ', err);
    });

app.get('/', (req, res) => {
    res.send('Backend do Estacionamento funcionando!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})