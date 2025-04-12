import { useState } from 'react';
import './SearchCategories.scss';

export const SearchCategories = () => {
	const seacrhIcon = ['./src/assets/Icons/search-icon.svg'];
	const [isFocused, setIsFocused] = useState('');
	return (
		<div className="search">
			<input
				type="search"
				className="search__categories"
				placeholder=""
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
