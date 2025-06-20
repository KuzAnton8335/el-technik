const express = require("express");
const router = express.Router();
const ProductModel = require("../models/Product");

// Получить все продукты
router.get("/product", async (req, res) => {
	try {
		const products = await ProductModel.find().setOptions({ db: "elmag" });
		if (products.length === 0) {
			return res.status(404).json({ message: "Продукты не найдены" });
		}
		// Добавляем полный URL к изображениям
		const productsWithFullImageUrl = products.map(product => ({
			...product.toObject(),
			image: `${req.protocol}://${req.get('host')}${product.image}`
		}));
		
		res.json(productsWithFullImageUrl);
	} catch (error) {
		console.error("Полная ошибка:", error.message, error.stack);
		res.status(500).json({ error: "Ошибка сервера", details: error.message });
	}
});

// вспомогательная функция для преобразования изображений
function addImageBaseUrl(product, req) {
	const productObj = product.toObject ? product.toObject() : product;
	return {
		...productObj,
		image: `${req.protocol}://${req.get('host')}${productObj.image}`
	};
}

// Получить продукты по категории
router.get("/product/category/:category", async (req, res) => {
	try {
		const products = await ProductModel.find({ category: req.params.category });
		const productsWithFullUrls = products.map(product =>
			addImageBaseUrl(product, req)
		);
		res.json(productsWithFullUrls);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Получить один продукт по ID
router.get("/product/id/:id", async (req, res) => {
	try {
		const product = await ProductModel.findOne({ id: req.params.id });
		if (!product) return res.status(404).json({ message: "Продукты не найдены" });
		res.json(addImageBaseUrl(product, req));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// создать новый продукт
router.post("/product", async (req, res) => {
	const product = new ProductModel(req.body);
	try {
		const newProduct = await product.save();
		res.status(201).json(addImageBaseUrl(newProduct, req));
	} catch (error) {
		res.status(400).json({ error: "Новый продукт не создан", details: error.message });
	}
});

// Обновить продукт по ID
router.put("/product/id/:id", async (req, res) => {
	try {
		const updatedProduct = await ProductModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedProduct) return res.status(404).json({ message: "Товар не найден" });
		res.json(addImageBaseUrl(updatedProduct, req));
	} catch (error) {
		res.status(400).json({ error: "Ошибка сервера", details: error.message });
	}
});

// Удалить продукт по ID
router.delete("/product/id/:id", async (req, res) => {
	try {
		const deletedProduct = await ProductModel.findOneAndDelete({ id: req.params.id });
		if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
		res.json({
			message: "Product deleted",
			deletedProduct: addImageBaseUrl(deletedProduct, req) // опционально
		});
	} catch (err) {
		res.status(500).json({ error: "Ошибка сервера", details: err.message });
	}
});

module.exports = router;