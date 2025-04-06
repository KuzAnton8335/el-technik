import { useState } from 'react';
import './SearchCategories.scss';

export const SearchCategories = () => {
	const seacrhIcon = ['./src/assets/Icons/search-icon.svg'];
	const [isFocused, setIsFocused] = useState('');
	return (
		<div className="search">
			<div className="search__icon">
				<img src={seacrhIcon} alt="search icon" />
			</div>
			<input
				type="search"
				className="search__categories"
				placeholder=""
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<label className={`placeholder ${isFocused ? 'focused' : ''}`}>
				Поиск в El.Technic
			</label>
		</div>
	);
};
