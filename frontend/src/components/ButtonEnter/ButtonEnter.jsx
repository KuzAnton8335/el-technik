import './ButtonEnter.scss';
import {useNavigate} from 'react-router-dom';

export const ButtonEnter = ({name,productId}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/products/${productId}`);
	};

	return (
		<button className="btnEnter" onClick={handleClick}>
			{name}
		</button>
	);
};
