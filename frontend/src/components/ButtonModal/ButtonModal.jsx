import "./buttonmodal.scss";

export const ButtonModal = ({name,onClick}) => {
	return (
		<button className="button-modal" onClick={onClick}>{name}</button>
	);
};
