// src/app.js
const express = require("express");
const sequelize = require("./config/db");
const Cliente = require("./models/Cliente");
const Vaga = require("./models/Vaga");
const Pagamento = require("./models/Pagamento");
const Reserva = require("./models/Reserva");

const app = express();

// Testando a conexão com o banco de dados e sincronizando as tabelas
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida!");

    // Sincronizando as tabelas com o banco de dados
    sequelize
      .sync({ force: true }) // 'force: true' recria as tabelas a cada reinício
      .then(() => {
        console.log("Tabelas criadas com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao sincronizar as tabelas:", err);
      });
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend do Estacionamento funcionando!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
