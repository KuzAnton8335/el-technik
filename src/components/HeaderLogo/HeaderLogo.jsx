import './HeaderLogo.scss';
import {NavLink} from 'react-router-dom';

export const HeaderLogo = () => {
	const srcIcon = ['../src/assets/Icons/logo.svg'];
	return (
		<NavLink to="/" className="logo-link">
			<img src={srcIcon} alt="El.Technic icon logo" className="logo-link__icon" />
			<span className="logo-link__text">El.Technic</span>
		</NavLink>
	);
};
