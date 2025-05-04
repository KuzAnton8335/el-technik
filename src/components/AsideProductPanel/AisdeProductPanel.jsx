import './asideproductpanel.scss';

export const AsideProductPanel = () => {
	return (
		<aside className="aside__sidebar">
			<h3 className="aside__title">Добавить товар</h3>
			<form className="aside__form-sidebar">
				<label className="aside__form-sidebar-label">1. id - номер товара</label>
				<input
					type="text"
					className="aside__form-sidebar-input"
					placeholder="введите id - товара"
				/>
				<label className="aside__form-sidebar-label">
					2. наименование товара
				</label>
				<input
					type="text"
					className="aside__form-sidebar-input"
					placeholder=" введите наименование"
				/>
				<label className="aside__form-sidebar-label">3. категория товара</label>
				<input
					type="text"
					className="aside__form-sidebar-input"
					placeholder=" категория"
				/>
				<label className="aside__form-sidebar-label">4. стоимость товара</label>
				<input
					type="text"
					className="aside__form-sidebar-input"
					placeholder="введите  стоимость "
				/>
				<label className="aside__form-sidebar-label">5. количество товара</label>
				<input
					type="text"
					className="aside__form-sidebar-input"
					placeholder="введите  количество"
				/>
				<label className="aside__form-sidebar-label">6. Описание товара</label>
				<textarea className="aside__form-sidebar-placeholder"></textarea>
				<label className="aside__form-sidebar-label">7. Загрузить фото</label>
				<input
					type="file"
					id="photo-upload"
					className="aside__form-sidebar-input"
					accept="image/*"
				/>
				<button className="aside__form-sidebar-button">
					зарегистрировать товар
				</button>
			</form>
		</aside>
	);
};
