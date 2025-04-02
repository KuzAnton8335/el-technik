import './ButtonEnter.scss';

export const ButtonEnter = (props) => {
	const { name } = props;
	return <button className="btnEnter">{name}</button>;
};
