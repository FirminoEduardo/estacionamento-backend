// src/routes/vagaRoutes.js
const express = require("express");
const router = express.Router();
const vagaController = require("../controllers/vagaController");

// Rota para criar uma nova vaga
router.post("/vagas", vagaController.createVaga);

// Rota para obter todas as vagas
router.get("/vagas", vagaController.getVagas);

// Rota para obter uma vaga pelo ID
router.get("/vagas/:id", vagaController.getVagaById);

// Rota para atualizar uma vaga
router.put("/vagas/:id", vagaController.updateVaga);

// Rota para deletar uma vaga
router.delete("/vagas/:id", vagaController.deleteVaga);

module.exports = router;
