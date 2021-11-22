import axios from 'axios';
import { loginFailure, loginRequest, loginSuccess } from './authActions';

export const login = (user) => {
	return (dispatch) => {
		dispatch(loginRequest());
		const options = {
			method: 'post',
			url: 'http://localhost:4000/login',
			data: user,
		};
		axios(options)
			.then((response) => {
				console.log(response.data);

				const userData = response.data;
				dispatch(loginSuccess(userData));

				localStorage.setItem('token', response.data.token);
				localStorage.setItem('username', response.data.username);
			})
			.catch((error) => {
				console.log(error?.response?.data?.message);

				const errorMessage = error?.response?.data?.message;
				dispatch(loginFailure(errorMessage));
			});
	};
};
