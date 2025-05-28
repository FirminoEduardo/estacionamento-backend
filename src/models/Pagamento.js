// src/models/Pagamento.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Pagamento = sequelize.define("Pagamento", {
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  data_pagamento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tipo_pagamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status_pagamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pagamento;
