import "./inputPassword.scss";


export const InputPassword = ({placeholder,...props},ref) => {

	return (
		<input type="password" className="inputPassword"
			   placeholder={placeholder}
			   ref={ref}
			   {...props} />
	)
}
