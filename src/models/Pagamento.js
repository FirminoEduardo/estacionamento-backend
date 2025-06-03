const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Cliente = require("./Cliente"); // Importando o modelo Cliente

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

// Relacionando Pagamento com Cliente (relacionamento 1:N)
Pagamento.belongsTo(Cliente, { foreignKey: "id_cliente" });
Cliente.hasMany(Pagamento, { foreignKey: "id_cliente" });

module.exports = Pagamento;
