const { DataType, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definindo o modelo Cliente
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    tipo_cliente: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    contato: {
        type: DataTypes.STRING,
    }
});

// Sincronizando o modelo com o banco de dados (cira a tabela se não existir)
Cliente.sync();

module.exports = Cliente;