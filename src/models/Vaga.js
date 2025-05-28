const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vaga = sequelize.define("Vaga", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo_vaga: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Vaga;