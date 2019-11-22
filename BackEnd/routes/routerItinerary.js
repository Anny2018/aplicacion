//traemos express para poder traer router
const express = require('express');
const itinerarycontroller = require('../controllers/itineraryController');

const router = express.Router();

//requiere la ruta

router
	.route('/itinerary/')
	.get(itinerarycontroller.listaritinerarios)
	.post(itinerarycontroller.cargaritinerario);

router
	.route('/itinerary/:id')
	.delete(itinerarycontroller.borraritinerario)
	.put(itinerarycontroller.modificaritinerario);

module.exports = router; //exporta
