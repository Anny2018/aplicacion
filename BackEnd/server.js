const express = require('express');
//trae la URI
require('dotenv').config();
const cors = require('cors');
require('./functions/database');

const app = express();
//AGREGAMOS MIDDLEWARES FUNCIONES QUE SE EJECUTAN ANTES DE LLEGAR A LAS RUTAS
//app.set() //adentro van las configuraciones

app.use(cors());
app.use(express.json()); //si no ponemos esto la peticion llega pero no se graba

//definimos la primer entrada
app.use('/api', require('./routes/routerCity')); //Esto lo hacemos para no sobrecargar el archivo server.js
app.use('/api', require('./routes/routerItinerary'));
//para cuando reciba una peticion /api llame a routerCity

app.listen(process.env.PORT, () => console.log('Listening on port 4000'));

//bodyParser
//mongoose.connect("basededatos")
//componentDidMount
//
