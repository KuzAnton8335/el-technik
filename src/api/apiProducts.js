// Получить все продукты
export const fetchProducts = async () => {
	const response = await fetch("http://localhost:3000/products");
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	const data = await response.json();
	return data.products;
}

// Получить определённую категорию товаров
export const fetchProductsByCategory = async (category) => {
	try {
		const response = await fetch(`http://localhost:3000/products?category=${category}`);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data.products;
	} catch (error) {
		console.error("Error fetching products by category:", error);
		throw error; // Пробрасываем ошибку дальше для обработки
	}
};



// Получить товар по id и категории
export const fetchProductDetails = async () => {
	const response = await fetch("http://localhost:3000/products");
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	const data = await response.json();
	return data.products.map((product) => {
		return {
			id: product.id,
			title: product.title,
			description: product.description,
			price: product.price,
			quantity: product.quantity,
			image: product.image,
		};
	});
}
