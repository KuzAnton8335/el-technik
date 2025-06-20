// src/pages/LoginPage/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const loginUser = async (userData) => {
	const response = await axios.post('http://localhost:3001/elmag/userregs', {
		userName: userData.userName,
		password: userData.password
	});

	Cookies.set('token', response.data.token, { expires: 7 });
	Cookies.set('userName', response.data.userName, { expires: 7 });
	Cookies.set('userId', response.data.userId, { expires: 7 });

	return response.data;
};
