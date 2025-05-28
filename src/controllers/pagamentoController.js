// src/controllers/pagamentoController.js
const Pagamento = require("../models/Pagamento");

// Criar um novo pagamento
exports.createPagamento = async (req, res) => {
  try {
    const {
      valor,
      data_pagamento,
      tipo_pagamento,
      status_pagamento,
      id_cliente,
    } = req.body;
    const pagamento = await Pagamento.create({
      valor,
      data_pagamento,
      tipo_pagamento,
      status_pagamento,
      id_cliente,
    });
    res.status(201).json(pagamento);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar pagamento");
  }
};

// Obter todos os pagamentos
exports.getPagamentos = async (req, res) => {
  try {
    const pagamentos = await Pagamento.findAll();
    res.status(200).json(pagamentos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter pagamentos");
  }
};

// Obter um pagamento pelo ID
exports.getPagamentoById = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByPk(req.params.id);
    if (!pagamento) {
      return res.status(404).send("Pagamento não encontrado");
    }
    res.status(200).json(pagamento);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter pagamento");
  }
};

// Atualizar um pagamento
exports.updatePagamento = async (req, res) => {
  try {
    const { valor, data_pagamento, tipo_pagamento, status_pagamento } =
      req.body;
    const pagamento = await Pagamento.findByPk(req.params.id);
    if (!pagamento) {
      return res.status(404).send("Pagamento não encontrado");
    }
    pagamento.valor = valor;
    pagamento.data_pagamento = data_pagamento;
    pagamento.tipo_pagamento = tipo_pagamento;
    pagamento.status_pagamento = status_pagamento;
    await pagamento.save();
    res.status(200).json(pagamento);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar pagamento");
  }
};

// Deletar um pagamento
exports.deletePagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByPk(req.params.id);
    if (!pagamento) {
      return res.status(404).send("Pagamento não encontrado");
    }
    await pagamento.destroy();
    res.status(200).send("Pagamento deletado");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao deletar pagamento");
  }
};
