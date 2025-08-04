import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.scss';
import { Header } from '../../layouts/Header/Header.jsx';
import {Footer} from '../../layouts/Footer/Footer.jsx';
import { ButtonExit } from '../../components/ButtonExit/ButtonExit.jsx';

const AdminLogin = () => {
	const [formData, setFormData] = useState({
		useradmin: '',
		password: ''
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const { useradmin, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("http://localhost:3001/elmag/useradmins/auth", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Ошибка входа");
			localStorage.setItem("adminToken", data.token);
			navigate("/productpanel");
		} catch (err) {
			console.error('AdminLogin error:', err);
			setError(err.message || "Произошла ошибка при входе");
		}
	};


	// проверить вход для админа!!!!
	return (
		<div className="admin-login">
			<Header/>
			<div className="container">
				<div className="admin-login__wrapper">
					<div className="loginPage__exit">
						<ButtonExit className="loginPage__exitButton" />
					</div>
					<div className="admin-login__admin">
						<h2 className="admin-login__title">Вход для администратора</h2>
						{error && <div className="error">{error}</div>}
						<form onSubmit={onSubmit} className="admin-login__form">
							<div className="admin-login__form-group">
								<label className="admin-login__label">Имя администратора</label>
								<input
									className="admin-login__inputName"
									type="text"
									name="useradmin"
									value={useradmin}
									onChange={onChange}
									required
								/>
							</div>
							<div className="admin-login__form-group">
								<label className="admin-login__label">Пароль</label>
								<input
									className="admin-login__inputPassword"
									type="password"
									name="password"
									value={password}
									onChange={onChange}
									required
								/>
							</div>
							<button type="submit" className="admin-login__enter">Войти</button>
						</form>
					</div>
				</div>

			</div>
			<Footer/>
		</div>
	);
};

export default AdminLogin;
