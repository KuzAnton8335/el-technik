import './CategoriesMenu.scss';
import { CATEGORIES} from './categories';
import {useState} from 'react';

export const CategoriesMenu = ({ onSelectCategory }) => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const handleSelectCategory = (categoryTitle) => {
		setSelectedCategory(categoryTitle);
	};
	return (
		<div className="categories">
			<h2 className="categories-title">Категории:</h2>
			<ul className="categories-list">
				{CATEGORIES.map(category => (
					<li className="categories-item" key={category.id}>
						<button
							className="categories-link"
							onClick={() => onSelectCategory(category.title)}
						>
							{category.id}. {category.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
