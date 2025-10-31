import { useState } from 'react';
import './SearchCategories.scss';

export const SearchCategories = ({ onSearch }) => {
	const [searchValue, setSearchValue] = useState('');
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
				<svg
					width="27"
					height="27"
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="11.1515" cy="11.1515" r="10.6515" stroke="#E9AB74" />
					<line
						x1="25.7187"
						y1="25.4531"
						x2="18.4258"
						y2="18.1602"
						stroke="#E9AB74"
						stroke-linecap="square"
					/>
				</svg>
			</button>
			<label className={`placeholder ${isFocused ? 'focused' : ''}`}>
				Поиск в El.Technic
			</label>
		</div>
	);
};
