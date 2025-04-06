import './HeaderLogo.scss';

export const HeaderLogo = () => {
	const srcIcon = ['./src/assets/Icons/logo.svg'];
	return (
		<a href="#" className="logo-link">
			<img src={srcIcon} alt="El.Technic icon logo" className="logo-link__icon" />
			<span className="logo-link__text">El.Technic</span>
		</a>
	);
};
