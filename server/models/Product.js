
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	id: String,
	category: String,
	title: String,
	description: String,
	price: String, // или Number
	quantity: String, // или Number
	image: String,
}, { collection: 'product', strict: false  }); // Указываем название коллекции

module.exports = mongoose.model('Product', productSchema);