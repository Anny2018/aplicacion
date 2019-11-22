const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser:true,
	useUnifiedTopology:true,
	useCreateIndex:true,
}).catch(error=>console.log(error));

const conexion = mongoose.connection;

conexion.once('open', () => console.log('Connected to database....'));
