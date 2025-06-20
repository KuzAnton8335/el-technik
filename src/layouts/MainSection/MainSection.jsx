import { Card } from '../../components/Card/Card';
import { CategoriesMenu } from '../../components/CategoriesMenu/CategoriesMenu';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { SelectCategories } from '../../components/SelectCategories/SelectCategories';
import { useState } from 'react';
import './MainSection.scss';

export const MainSection = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [priceFilter, setPriceFilter] = useState('');

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	const handlePriceChange = (price) => {
		setPriceFilter(price);
	};

	return (
		<main className="main">
			<div className="container">
				<div className="main__search">
					<SearchCategories onSearch={handleSearch} />
					<SelectCategories onChange={handlePriceChange} />
				</div>
				<div className="main__wrapper">
					<div className="main__categories">
						<CategoriesMenu onSelectCategory={setSelectedCategory} />
					</div>
					<div className="main__card">
						<Card
							selectedCategory={selectedCategory}
							searchQuery={searchQuery}
							priceFilter={priceFilter}  // Убедитесь, что этот пропс передается
						/>
					</div>
				</div>
			</div>
		</main>
	);
};
