const Cliente = require('../models/Cliente');

// Criar um novo clinete
exports.createCliente = async(req, res) => {
    try {
        const {nome, cpf, tipo_cliente, contato} = req.body;
        const cliente = await Cliente.create({nome, cpf, tipo_cliente, contato});
        res.status(201).json(cliente);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao criar cliente');
    }
};

// Obter todos os clientes
exports.getClientes = async (req, res) => {
    try {
      const clientes = await Cliente.findAll();
      res.status(200).json(clientes);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao obter clientes');
    }
  };
  
  // Obter um cliente pelo ID
  exports.getClienteById = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).send('Cliente não encontrado');
      }
      res.status(200).json(cliente);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao obter cliente');
    }
  };
  
  // Atualizar os dados de um cliente
  exports.updateCliente = async (req, res) => {
    try {
      const { nome, cpf, tipo_cliente, contato } = req.body;
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).send('Cliente não encontrado');
      }
      cliente.nome = nome;
      cliente.cpf = cpf;
      cliente.tipo_cliente = tipo_cliente;
      cliente.contato = contato;
      await cliente.save();
      res.status(200).json(cliente);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar cliente');
    }
  };
  
  // Deletar um cliente
  exports.deleteCliente = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).send('Cliente não encontrado');
      }
      await cliente.destroy();
      res.status(200).send('Cliente deletado');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao deletar cliente');
    }
  };