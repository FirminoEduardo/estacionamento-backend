// src/controllers/vagaController.js
const Vaga = require("../models/Vaga");

// Criar uma nova vaga
exports.createVaga = async (req, res) => {
  try {
    const { status, capacidade, tipo_vaga } = req.body;
    const vaga = await Vaga.create({ status, capacidade, tipo_vaga });
    res.status(201).json(vaga);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar vaga");
  }
};

// Obter todas as vagas
exports.getVagas = async (req, res) => {
  try {
    const vagas = await Vaga.findAll();
    res.status(200).json(vagas);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter vagas");
  }
};

// Obter uma vaga pelo ID
exports.getVagaById = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).send("Vaga não encontrada");
    }
    res.status(200).json(vaga);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter vaga");
  }
};

// Atualizar uma vaga
exports.updateVaga = async (req, res) => {
  try {
    const { status, capacidade, tipo_vaga } = req.body;
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).send("Vaga não encontrada");
    }
    vaga.status = status;
    vaga.capacidade = capacidade;
    vaga.tipo_vaga = tipo_vaga;
    await vaga.save();
    res.status(200).json(vaga);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar vaga");
  }
};

// Deletar uma vaga
exports.deleteVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).send("Vaga não encontrada");
    }
    await vaga.destroy();
    res.status(200).send("Vaga deletada");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao deletar vaga");
  }
};
