const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const itinerarySchema = new mongoose.Schema({
	ciudad: { type: String, required: true },
	username: { type: String, require: true },
	title: { type: String, required: true },
	profilepicture: { type: String, required: false },
	rating: { type: Number, required: true },
	duration: { type: Number, required: true },
	price: { type: Number, required: true },
	hashtag: { type: Array, required: true }
});

const Itinerary = mongoose.model('itinerary', itinerarySchema);

itinerarySchema.plugin(uniqueValidator);
module.exports = Itinerary;
