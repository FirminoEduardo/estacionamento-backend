// src/models/Reserva.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Reserva = sequelize.define("Reserva", {
  status_reserva: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_reserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Reserva;
