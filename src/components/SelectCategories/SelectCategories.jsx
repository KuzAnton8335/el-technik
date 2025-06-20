import './SelectCategories.scss';

export const SelectCategories = ({ onChange }) => {
	return (
		<select
			name="categories"
			id="categories"
			className="select"
			onChange={(e) => onChange(e.target.value)}
			defaultValue=""
		>
			<option value="" className="select__options">
				Товар по стоимости
			</option>
			<option value="2000" className="select__options">
				2000 рублей
			</option>
			<option value="5000" className="select__options">
				5000 рублей
			</option>
			<option value="7000" className="select__options">
				7000 рублей
			</option>
			<option value="10000" className="select__options">
				10000 рублей
			</option>
			<option value="15000" className="select__options">
				15000 рублей
			</option>
		</select>
	);
};
