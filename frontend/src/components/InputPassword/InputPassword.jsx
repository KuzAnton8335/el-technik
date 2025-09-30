import "./inputPassword.scss";


export const InputPassword = ({placeholder,error,...props},ref) => {

	return (
		<div>
			<input type="password" className="inputPassword"
				   placeholder={placeholder}
				   ref={ref}
				   {...props} />
			{error && <span className="error-message">{error}</span>}
		</div>

	)
}
