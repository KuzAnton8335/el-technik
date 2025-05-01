import "./tableproducts.scss"

export const TableProducts = () => {
	return (
		<div className="tableproducts">

			<div className="tableproducts__table">
				<h3 className="tableproducts__title">Таблица товаров магазина</h3>
          		<div className="tableproducts__thead">
					<ul className="tableproducts__thead-list">
						<li className="tableproducts__thead-list-item">id</li>
						<li className="tableproducts__thead-list-item">Наименование</li>
						<li className="tableproducts__thead-list-item">Категория</li>
						<li className="tableproducts__thead-list-item">Стоимость</li>
						<li className="tableproducts__thead-list-item">Количество</li>
						<li className="tableproducts__thead-list-item">Фото</li>
						<li className="tableproducts__thead-list-item">Действие</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
