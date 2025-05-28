// src/routes/clienteRoutes.js
const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

// Rota para criar um novo cliente
router.post("/clientes", clienteController.createCliente);

// Rota para obter todos os clientes
router.get("/clientes", clienteController.getClientes);

// Rota para obter um cliente pelo ID
router.get("/clientes/:id", clienteController.getClienteById);

// Rota para atualizar os dados de um cliente
router.put("/clientes/:id", clienteController.updateCliente);

// Rota para deletar um cliente
router.delete("/clientes/:id", clienteController.deleteCliente);

module.exports = router;