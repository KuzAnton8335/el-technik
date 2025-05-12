import './CategoriesMenu.scss';
import { CATEGORIES} from './categories';

export const CategoriesMenu = ({ onSelectCategory }) => {
	return (
		<div className="categories">
			<h2 className="categories-title">Категории:</h2>
			<ul className="categories-list">
				{CATEGORIES.map(category => (
					<li className="categories-item" key={category.id}>
						<button
							className="categories-link"
							onClick={() => onSelectCategory(category.id)}
						>
							{category.id}. {category.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
