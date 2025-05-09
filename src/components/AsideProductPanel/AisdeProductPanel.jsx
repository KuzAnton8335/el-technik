import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/productAddActions';
import './asideproductpanel.scss';

export const AsideProductPanel = () => {
	const dispatch = useDispatch();
	const categories = [
		'el.motors',
		'commutation',
		'cable',
		'tools',
		'other'
	]
	const [productData, setProductData] = useState({
		id: '',
		category: categories[0],
		title: '',
		description: '',
		price: '',
		quantity: '',
		image: '',
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name === 'image') {
			setProductData({ ...productData, [name]: files[0] });
		} else {
			setProductData({ ...productData, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Отправляемые данные:', productData);

		try {
			const productToSend = {
				id: productData.id,
				category: productData.category,
				title: productData.title,
				description: productData.description,
				price: Number(productData.price),
				quantity: Number(productData.quantity),
				// image: productData.image
			};

			console.log('Данные для отправки:', productToSend);
			await dispatch(addProduct(productToSend));

			alert('Товар успешно добавлен!');
			setProductData({
				id: '',
				category: '',
				title: '',
				description: '',
				price: '',
				quantity: '',
				image: null,
			});
		} catch (error) {
			console.error('Ошибка:', error);
			alert('Ошибка при добавлении товара: ' + error.message);
		}
	};

	return (
		<aside className="aside__sidebar">
			<h3 className="aside__title">Добавить товар</h3>
			<form className="aside__form-sidebar" onSubmit={handleSubmit}>
				<label className="aside__form-sidebar-label">1. id - номер товара</label>
				<input
					name="id"
					type="text"
					className="aside__form-sidebar-input"
					placeholder="введите id - товара"
					value={productData.id}
					onChange={handleChange}
					required
				/>
				<label className="aside__form-sidebar-label">
					2. наименование товара
				</label>
				<input
					name="title"
					type="text"
					className="aside__form-sidebar-input"
					placeholder=" введите наименование"
					value={productData.title}
					onChange={handleChange}
					required
				/>
				<label className="aside__form-sidebar-label">3. категория товара</label>
				<select
					name="category"
					className="aside__form-sidebar-input"
					value={productData.category}
					onChange={handleChange}
					required
				>
					{categories.map((category, index) => (
						<option key={index} value={category}>
							{category}
						</option>
					))}
				</select>
				<label className="aside__form-sidebar-label">4. стоимость товара</label>
				<input
					name="price"
					type="number"
					className="aside__form-sidebar-input"
					placeholder="введите стоимость"
					value={productData.price}
					onChange={handleChange}
					required
				/>
				<label className="aside__form-sidebar-label">5. количество товара</label>
				<input
					name="quantity"
					type="number"
					className="aside__form-sidebar-input"
					placeholder="введите количество"
					value={productData.quantity}
					onChange={handleChange}
					required
				/>
				<label className="aside__form-sidebar-label">6. Описание товара</label>
				<textarea
					name="description"
					className="aside__form-sidebar-placeholder"
					value={productData.description}
					onChange={handleChange}
					required
				></textarea>
				<label className="aside__form-sidebar-label">
					7. Загрузить адрес фото
				</label>
				<input
					name="image"
					type="text"
					id="photo-upload"
					className="aside__form-sidebar-input"
					accept="image/*"
					onChange={handleChange}
				/>
				<button type="submit" className="aside__form-sidebar-button">
					зарегистрировать товар
				</button>
			</form>
		</aside>
	);
};
