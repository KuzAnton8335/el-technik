import './CategoriesMenu.scss';

export const CategoriesMenu = () => {
	return (
		<div className="categories">
			<h2 className="categories-title">Категории:</h2>
			<ul className="categories-list">
				<li className="categories-item">
					<a href="#" className="categories-link">
						1. Электродвигатели
					</a>
				</li>
				<li className="categories-item">
					<a href="#" className="categories-link">
						2. Автоматические выключетели
					</a>
				</li>
				<li className="categories-item">
					<a href="#" className="categories-link">
						3. Магнитные пусктели
					</a>
				</li>
				<li className="categories-item">
					<a href="#" className="categories-link">
						4. Провод, Кабель
					</a>
				</li>
				<li className="categories-item">
					<a href="#" className="categories-link">
						5. Ручной инструмент
					</a>
				</li>
			</ul>
		</div>
	);
};
