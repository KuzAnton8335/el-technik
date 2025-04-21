// Получить все продукты
export const fetchProducts = async () => {
	try {
		const response = await fetch("http://localhost:3000/products");
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		if (!data) throw new Error("No data received");
		return Array.isArray(data) ? data : data.products || [];
	} catch (error) {
		console.error("Failed to fetch products:", error);
		throw error;
	}
};





