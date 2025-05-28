// src/routes/pagamentoRoutes.js
const express = require("express");
const router = express.Router();
const pagamentoController = require("../controllers/pagamentoController");

// Rota para criar um novo pagamento
router.post("/pagamentos", pagamentoController.createPagamento);

// Rota para obter todos os pagamentos
router.get("/pagamentos", pagamentoController.getPagamentos);

// Rota para obter um pagamento pelo ID
router.get("/pagamentos/:id", pagamentoController.getPagamentoById);

// Rota para atualizar um pagamento
router.put("/pagamentos/:id", pagamentoController.updatePagamento);

// Rota para deletar um pagamento
router.delete("/pagamentos/:id", pagamentoController.deletePagamento);

module.exports = router;
