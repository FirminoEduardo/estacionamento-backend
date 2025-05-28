// src/controllers/entradaSaidaController.js
const RegistroEntradaSaida = require("../models/RegistroEntradaSaida");
const Vaga = require("../models/Vaga");
const Cliente = require("../models/Cliente");

// Registrar a entrada de um veículo
exports.registrarEntrada = async (req, res) => {
  try {
    const { id_veiculo, id_vaga, data_entrada } = req.body;
    const vaga = await Vaga.findByPk(id_vaga);
    if (!vaga) {
      return res.status(404).send("Vaga não encontrada");
    }
    const registro = await RegistroEntradaSaida.create({
      id_veiculo,
      id_vaga,
      data_entrada,
    });
    res.status(201).json(registro);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao registrar entrada");
  }
};

// Registrar a saída de um veículo
exports.registrarSaida = async (req, res) => {
  try {
    const id_registro = req.params.id;
    const registro = await RegistroEntradaSaida.findByPk(id_registro);
    if (!registro) {
      return res.status(404).send("Registro não encontrado");
    }
    const data_saida = new Date();
    registro.data_saida = data_saida;
    const valor_pago = calcularValorPago(registro.data_entrada, data_saida); // Lógica para calcular o valor
    registro.valor_pago = valor_pago;
    await registro.save();
    res.status(200).json(registro);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao registrar saída");
  }
};

// Função para calcular o valor pago (simplificação)
const calcularValorPago = (dataEntrada, dataSaida) => {
  const tempo = (dataSaida - dataEntrada) / (1000 * 60 * 60); // tempo em horas
  return tempo * 10; // Supondo R$10,00 por hora
};
