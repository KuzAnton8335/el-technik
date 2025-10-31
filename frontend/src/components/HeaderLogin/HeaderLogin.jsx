import axios from 'axios';
import Cookies from 'js-cookie'; // Импортируем библиотеку js-cookie
import { useEffect, useState } from 'react';
import './login.scss';

export const HeaderLogin = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const token = Cookies.get('token');

				if (!token) {
					setUser(null);
					setLoading(false);
					return;
				}

				const response = await axios.get('http://localhost:3001/elmag/userregs', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				console.log('Ответ сервера:', response.data);
				setUser(response.data);
				setLoading(false);
			} catch (err) {
				console.error('Ошибка при загрузке пользователя:', err);
				// Если ошибка 401 (Unauthorized), это может означать истекший или недействительный токен
				// В этом случае можно удалить токен и предложить пользователю войти снова
				if (err.response && err.response.status === 401) {
					Cookies.remove('token'); // Удаляем недействительный токен из cookie
					setUser(null); // Сбрасываем пользователя
					setError('Сессия истекла. Пожалуйста, войдите снова.');
				} else {
					setError(err.message);
				}
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error}</div>;

	return (
		<div className="header-login">
			<p>
				Добро пожаловать,
				<br /> {user?.userName || 'Гость'}!
			</p>
		</div>
	);
};
