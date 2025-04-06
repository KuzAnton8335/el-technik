import './SelectCategories.scss';

export const SelectCategories = () => {
	return (
		<select name="categories" id="categories" className="select">
			<option value="" className="select__options">
				Товар по стоимости
			</option>
			<option value="1" className="select__options">
				2000 рублей
			</option>
			<option value="2" className="select__options">
				5000 рублей
			</option>
			<option value="3" className="select__options">
				7000 рублей
			</option>
			<option value="4" className="select__options">
				10000 рублей
			</option>
		</select>
	);
};
