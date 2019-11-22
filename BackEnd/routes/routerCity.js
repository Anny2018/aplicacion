//traemos express para poder traer router
const express = require('express');
const citycontroller = require('../controllers/cityController');

const router = express.Router();

//requiere la ruta

router
	.route('/city')
	.get(citycontroller.listarciudades)
	.post(citycontroller.cargarciudades);

router
	.route('/city/:id')
	.delete(citycontroller.borrarciudades)
	.put(citycontroller.modificarcidudades);

module.exports = router; //exporta
