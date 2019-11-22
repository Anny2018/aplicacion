const Itinerary = require('../models/itinerarymodels');
const itinerarycontroller = {
	listaritinerarios: async (req, res) => {
		const data = await Itinerary.find();
		res.json({ Respuesta: data });
	},
	borraritinerario: async (req, res) => {
		var id = req.params.id;
		await Itinerary.findOneAndDelete({ _id: id }),
			res.json('Respuesta: Factura Borrada');
	},
	modificaritinerario: async (req, res) => {
		var id = req.params.id;
		var ciudad = req.body.ciudad;
		var pais = req.body.pais;

		await Itinerary.findOneAndUpdate(
			{ _id: id },
			{ ciudad: ciudad, pais: pais }
		);
		res.json({ Respuesta: 'Okey' });
	},
	cargaritinerario: async (req, res) => {
		const {
			ciudad,
			username,
			title,
			profilepicture,
			rating,
			duration,
			price,
			hashtag
		} = req.body;

		const nuevaciudad = new Itinerary({
			ciudad,
			username,
			title,
			profilepicture,
			rating,
			duration,
			price,
			hashtag
		});

		await nuevaciudad.save(); //espera grabar la factura
		res.send('Ciudad Cargada'); //luego manda el mesnaje
	}
};

module.exports = itinerarycontroller;
//EL ROUTER DERIVA EL METODO DE LA REQ
