import "./inputPassword.scss";


export const InputPassword = (props) => {
	const { placeholder } = props;
	return (
		<input type="password" className="inputPassword" placeholder={placeholder} />
	)
}
