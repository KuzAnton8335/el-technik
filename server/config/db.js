const mongoose = require("mongoose");
const connectDB = async (collectionName) => {
	try {
		// Подключение к MongoDB
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000,
		})
			.then(() => console.log("Успешное подключение к MongoDB"))
			.catch(err => console.error("Ошибка подключения к MongoDB:", err));
		
		
		
		// Проверка наличия данных в указанной коллекции
		if (collectionName) {
			const db = mongoose.connection.db;
			const collection = db.collection(collectionName);
			
			const count = await collection.countDocuments({});
			if (count === 0) {
				console.log(`Коллекция "${collectionName}" пуста`);
				return false;
			} else {
				console.log(`В коллекции "${collectionName}" найдено ${count} документов`);
				return true;
			}
		}
		
		return true;
	} catch (err) {
		console.error("Ошибка подключения к MongoDB:", err);
		process.exit(1);
	}
};

module.exports = connectDB;