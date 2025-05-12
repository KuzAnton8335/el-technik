import { Card } from '../../components/Card/Card';
import { CategoriesMenu } from '../../components/CategoriesMenu/CategoriesMenu';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { SelectCategories } from '../../components/SelectCategories/SelectCategories';
import { useState } from 'react';
import './MainSection.scss';


export const MainSection = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	return (
		<main className="main">
			<div className="container">
				<div className="main__search">
					<SearchCategories />
					<SelectCategories />
				</div>
				<div className="main__wrapper">
					<div className="main__categories">
						<CategoriesMenu  onSelectCategory={setSelectedCategory}  />
					</div>
					<div className="main__card">
						<Card selectedCategory={selectedCategory}/>
					</div>
				</div>
			</div>
		</main>
	);
};
