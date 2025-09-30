import { useState } from 'react';
import './SearchCategories.scss';

export const SearchCategories = ({ onSearch }) => {
	const [searchValue, setSearchValue] = useState('');
	const seacrhIcon = ['../src/assets/Icons/search-icon.svg'];
	const [isFocused, setIsFocused] = useState(false);

	const handleSearchChange = (e) => {
		const value = e.target.value;
		setSearchValue(value);
		onSearch(value); // Передаем значение поиска в родительский компонент
	};

	return (
		<div className="search">
			<input
				type="search"
				className="search__categories"
				placeholder=""
				value={searchValue}
				onChange={handleSearchChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<button className="search__categories-button">
				<img src={seacrhIcon} alt="иконка поиска" />
			</button>
			<label className={`placeholder ${isFocused ? 'focused' : ''}`}>
				Поиск в El.Technic
			</label>
		</div>
	);
};
