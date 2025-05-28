// src/routes/entradaSaidaRoutes.js
const express = require("express");
const router = express.Router();
const entradaSaidaController = require("../controllers/entradaSaidaController");

// Rota para registrar a entrada de um veículo
router.post("/entrada", entradaSaidaController.registrarEntrada);

// Rota para registrar a saída de um veículo
router.post("/saida/:id", entradaSaidaController.registrarSaida);

module.exports = router;
