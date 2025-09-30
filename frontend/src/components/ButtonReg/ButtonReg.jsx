import './ButtonReg.scss';

export const ButtonReg = (props) => {
	const { name } = props;
	return <button className="btnReg">{name}</button>;
};
