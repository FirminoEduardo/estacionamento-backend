const express = require("express");
const sequelize = require("./config/db");
const clienteRoutes = require("./routes/clienteRoutes"); // Rota de Cliente
const vagaRoutes = require("./routes/vagaRoutes"); // Rota de Vaga
const pagamentoRoutes = require("./routes/pagamentoRoutes"); // Rota de Pagamento
//const entradaSaidaRoutes = require("./routes/entradaSaidaRoutes"); // Rota de Entrada/Saída

const cors = require('cors');
const app = express();
app.use(cors());

// Middleware para processar o corpo da requisição como JSON
app.use(express.json());

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

// Usando as rotas de cliente
app.use("/api", clienteRoutes);

// Usando as rotas de vaga
app.use("/api", vagaRoutes); // Configurando o prefixo /api para as rotas de Vaga

// Usando as rotas de pagamento
app.use("/api", pagamentoRoutes); // Configurando o prefixo /api para as rotas de Pagamento

// Usando as rotas de entrada/saída
//app.use("/api", entradaSaidaRoutes); // Configurando o prefixo /api para as rotas de Entrada/Saída

app.get("/", (req, res) => {
  res.send("Backend do Estacionamento funcionando!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
