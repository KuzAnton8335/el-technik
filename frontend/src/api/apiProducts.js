// // Получить все продукты
// export const fetchProducts = async () => {
// 	//'http://localhost:3001/elmag/product'
// 	try {
// 		const response = await fetch('http://localhost:3001/elmag/product');
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}
// 		const data = await response.json();
// 		if (!data) throw new Error('No data received');
// 		return Array.isArray(data) ? data : data.products || [];
// 	} catch (error) {
// 		console.error('Failed to fetch products:', error);
// 		throw error;
// 	}
// };
// 'http://localhost:3001/elmag';
const API_URL = '/elmag';

/**
 * Получить все продукты
 */
export const getProducts = async () => {
	try {
		const response = await fetch(`${API_URL}/product`);
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Ошибка при получении продуктов:', error);
		throw error;
	}
};

/**
 * Получить продукты по категории
 * @param {string} category
 */
export const getProductsByCategory = async (category) => {
	try {
		const response = await fetch(`${API_URL}/product/category/${category}`);
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Ошибка при получении по категории:', error);
		throw error;
	}
};

/**
 * Получить продукт по ID
 * @param {string} id
 */
export const getProductById = async (id) => {
	try {
		const response = await fetch(`${API_URL}/product/id/${id}`);
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Ошибка при получении продукта:', error);
		throw error;
	}
};

/**
 * Создать новый продукт
 * @param {Object} productData
 */
export const createProduct = async (productData) => {
	try {
		const response = await fetch(`${API_URL}/product`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(productData),
		});
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Ошибка при создании продукта:', error);
		throw error;
	}
};

/**
 * Обновить продукт
 * @param {string} id
 * @param {Object} updateData
 */
export const updateProduct = async (id, updateData) => {
	try {
		const response = await fetch(`${API_URL}/product/id/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updateData),
		});
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Ошибка при обновлении продукта:', error);
		throw error;
	}
};

/**
 * Удалить продукт
 * @param {string} id
 */
export const deleteProduct = async (id) => {
	try {
		const response = await fetch(`${API_URL}/product/${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Ошибка при удалении продукта:', error);
		throw error;
	}
};
