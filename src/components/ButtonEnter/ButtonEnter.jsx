import './ButtonEnter.scss';
import {Link} from 'react-router-dom';

export const ButtonEnter = ({name,to,onClick}) => {
	if (to) {
		return (
			<Link to={to} className="btnEnter">
				{name}
			</Link>
		);
	}

	return (
		<button className="btnEnter" onClick={onClick}>
			{name}
		</button>
	);
};
