import "./modal.scss";


export const Modal = ({isOpen,onClose,children}) => {
	if(!isOpen)return null;
	return (
		<div className="modal__overlay" onClick={onClose}>
			<div className="modal__content"  onClick={(e)=>e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
