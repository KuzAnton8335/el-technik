import { Card } from '../../components/Card/Card';
import { CategoriesMenu } from '../../components/CategoriesMenu/CategoriesMenu';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { SelectCategories } from '../../components/SelectCategories/SelectCategories';
import './MainSection.scss';

export const MainSection = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="main__search">
					<SearchCategories />
					<SelectCategories />
				</div>
				<div className="main__wrapper">
					<div className="main__categories">
						<CategoriesMenu />
					</div>
					<div className="main__card">
						<Card />
					</div>
				</div>
			</div>
		</main>
	);
};
