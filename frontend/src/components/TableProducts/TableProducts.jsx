import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, deleteProduct, updateProduct } from '../../actions/actionGetProducts';
import {Loader} from "../Loader/Loader";
import './tableproducts.scss';

export const TableProducts = () => {
	const dispatch = useDispatch();
	const {loading, products, error} = useSelector(state => state.products);
	const [editingId, setEditingId] = useState(null);
	const [editedProduct, setEditedProduct] = useState({});

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const handleDelete = (id) => {
		if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
			dispatch(deleteProduct(id));
		}
	};

	const handleEdit = (product) => {
		setEditingId(product.id);
		setEditedProduct({...product});
	};

	const handleCancelEdit = () => {
		setEditingId(null);
	};

	const handleSaveEdit = () => {
		dispatch(updateProduct(editingId, editedProduct));
		setEditingId(null);
	};

	const handleChange = (e, field) => {
		setEditedProduct({
			...editedProduct,
			[field]: e.target.value
		});
	};

	if(loading){
		return <Loader />;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="tableproducts">
			<div className="tableproducts__table">
				<h3 className="tableproducts__title">Таблица товаров магазина</h3>
				<div className="tableproducts__thead">
					<ul className="tableproducts__thead-list">
						<li className="tableproducts__thead-list-item">
							id<span className="separator"></span>
						</li>
						<li className="tableproducts__thead-list-item">
							Наименование<span className="separator"></span>
						</li>
						<li className="tableproducts__thead-list-item">
							Категория<span className="separator"></span>
						</li>
						<li className="tableproducts__thead-list-item">
							Стоимость<span className="separator"></span>
						</li>
						<li className="tableproducts__thead-list-item">
							Количество<span className="separator"></span>
						</li>
						<li className="tableproducts__thead-list-item">
							Фото<span className="separator"></span>
						</li>
						<li className="tableproducts__thead-list-item">Действие</li>
					</ul>
				</div>
				<div className="tableproducts__tbody">
					{products.sort((a, b) => a.id - b.id).map((product) => (
						<ul key={product.id} className="tableproducts__tbody-list">
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-48">
								{product.id}
							</li>
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-162">
								{editingId === product.id ? (
									<input
										type="text"
										value={editedProduct.title}
										onChange={(e) => handleChange(e, 'title')}
									/>
								) : (
									product.title
								)}
							</li>
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-120">
								{editingId === product.id ? (
									<input
										type="text"
										value={editedProduct.category}
										onChange={(e) => handleChange(e, 'category')}
									/>
								) : (
									product.category
								)}
							</li>
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-125">
								{editingId === product.id ? (
									<input
										type="number"
										value={editedProduct.price}
										onChange={(e) => handleChange(e, 'price')}
									/>
								) : (
									product.price
								)}
							</li>
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-90">
								{editingId === product.id ? (
									<input
										type="number"
										value={editedProduct.quantity}
										onChange={(e) => handleChange(e, 'quantity')}
									/>
								) : (
									product.quantity
								)}
							</li>
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-90">
								<img src={product.image} alt={product.title} width="50" />
							</li>
							<li className="tableproducts__tbody-list-item tableproducts__tbody-list-item-140">
								{editingId === product.id ? (
									<>
										<button
											className="tableproducts__tbody-list-button tableproducts__tbody-list-button-save"
											onClick={handleSaveEdit}
										>
											Сохранить
										</button>
										<button
											className="tableproducts__tbody-list-button tableproducts__tbody-list-button-cancel"
											onClick={handleCancelEdit}
										>
											Отмена
										</button>
									</>
								) : (
									<>
										<button
											className="tableproducts__tbody-list-button tableproducts__tbody-list-button-edit"
											onClick={() => handleEdit(product)}
										>
											<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
												<svg
													width="25"
													height="25"
													viewBox="0 0 25 25"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M24.6533 2.69137L22.4169 0.361591C22.186 0.120708 21.8823 0 21.5792 0C21.2761 0 20.973 0.120174 20.7421 0.361057L18.9531 2.22189L22.8644 6.295L24.6533 4.4347C25.1157 3.95293 25.1157 3.17153 24.6533 2.69137Z"
														fill="#E9AB74"
													/>
													<path
														d="M7.33984 14.3136L11.2516 18.3872L22.0268 7.16773L18.1151 3.09409L7.33984 14.3136Z"
														fill="#E9AB74"
													/>
													<path
														d="M6.49524 15.1852L5.66016 20.1268L10.407 19.2583L6.49524 15.1852Z"
														fill="#E9AB74"
													/>
													<path
														d="M17.3095 22.3289H2.56056V6.94341H12.9692L15.5344 4.27287H1.65584C0.744973 4.27287 0 5.04999 0 6.00017V23.2727C0 24.2229 0.744973 25 1.65584 25H18.2137C19.1246 25 19.8695 24.2229 19.8695 23.2727V10.9236L17.3095 13.5893V22.3289Z"
														fill="#E9AB74"
													/>
												</svg>
											</svg>
										</button>
										<button
											className="tableproducts__tbody-list-button tableproducts__tbody-list-button-delete"
											onClick={() => handleDelete(product.id)}
										>
											<svg
												width="25"
												height="25"
												viewBox="0 0 25 25"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g>
													<path
														d="M25 22.6165C25 23.933 23.933 25 22.6165 25H2.3835C1.067 25 0 23.933 0 22.6165V2.3835C0 1.067 1.067 0 2.3835 0H22.6165C23.933 0 25 1.067 25 2.3835V22.6165Z"
														fill="#E9AB74"
													/>
													<path
														opacity="0.2"
														d="M18.5144 7.671L7.6709 18.5145L14.1564 25H22.6164C23.9329 25 24.9999 23.933 24.9999 22.6165V14.1565L18.5144 7.671Z"
														fill="black"
													/>
													<path
														d="M18.5151 16.241C18.8156 16.5415 18.8156 17.029 18.5151 17.3295L17.3296 18.515C17.0291 18.8155 16.5416 18.8155 16.2411 18.515L6.48612 8.759C6.18562 8.4585 6.18562 7.971 6.48612 7.6705L7.67162 6.485C7.97212 6.1845 8.45962 6.1845 8.76012 6.485L18.5151 16.241Z"
														fill="white"
													/>
													<path
														d="M16.2411 6.4855C16.5416 6.185 17.0291 6.185 17.3296 6.4855L18.5151 7.671C18.8156 7.9715 18.8156 8.459 18.5151 8.7595L8.75914 18.5145C8.45864 18.815 7.97114 18.815 7.67064 18.5145L6.48514 17.329C6.18464 17.0285 6.18464 16.541 6.48514 16.2405L16.2411 6.4855Z"
														fill="white"
													/>
												</g>
												<defs>
													<clipPath id="clip0_34_127">
														<rect width="25" height="25" fill="white" />
													</clipPath>
												</defs>
											</svg>
										</button>
									</>
								)}
							</li>
						</ul>
					))}
				</div>
			</div>
		</div>
	);
};

{/*


									*/}
