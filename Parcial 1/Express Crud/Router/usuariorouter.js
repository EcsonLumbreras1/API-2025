const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuarioController');

router.get('/', usuarioController.consultaUsuario);
router.post('/', usuarioController.insertarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
