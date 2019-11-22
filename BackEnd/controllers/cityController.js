const City = require('../models/citymodels');
const citycontroller = {
	listarciudades: async (req, res) => {
		const data = await City.find();
		res.json({ Respuesta: data });
	},

	cargarciudades: async (req, res) => {
		var ciudad1 = req.body.ciudad;
		var pais1 = req.body.pais;
		//grabamos en la base de datos

		const nuevaciudad = new City({
			ciudad: ciudad1,
			pais: pais1
		});

		await nuevaciudad.save(); //espera grabar la factura
		res.send('Ciudad Cargada'); //luego manda el mesnaje
	},
	borrarciudades: async (req, res) => {
		var id = req.params.id;
		await City.findOneAndDelete({ _id: id }),
			res.json('Respuesta: Factura Borrada');
	},
	modificarcidudades: async (req, res) => {
		var id = req.params.id;
		var ciudad = req.body.ciudad;
		var pais = req.body.pais;

		await City.findOneAndUpdate({ _id: id }, { ciudad: ciudad, pais: pais });
		res.json({ Respuesta: 'Okey' });
	}

	//CUANDO  LLAMEN A CITYCONTROLER Y USEN ESTE METODO
	//QUE EJECUTE ESO
};

module.exports = citycontroller;
//EL ROUTER DERIVA EL METODO DE LA REQ
