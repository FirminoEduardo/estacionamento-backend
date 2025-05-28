const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env

// Conexão com o banco de dados PostgreSQL
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres', // O banco de dados que estamos usando
        port: process.env.DB_PORT,
    }
);

module.exports = sequelize;