import "./inputLogin.scss";

export const InputLogin = ({placeholder,...props},ref ) => {
	return (
		<input type="text" className="inputLogin"
			   placeholder={placeholder}
			   ref={ref}
			   {...props}/>
	)
}
