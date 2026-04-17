const express = require('express');
const router = express.Router();
const clienteController = require('../controller/client-controller');
router.post('/clientes', clienteController.criarCliente);
router.delete('/clientes/:id', clienteController.excluirCliente);
module.exports = router;