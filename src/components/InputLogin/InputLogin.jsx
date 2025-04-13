import "./inputLogin.scss";

export const InputLogin = (props) => {
	const { placeholder } = props;
	return (
		<input type="text" className="inputLogin" placeholder={placeholder} />
	)
}
