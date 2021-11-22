import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../redux/auth/authAsyncActions';
import './Login.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const user = {
		username: username,
		password: password,
	};

	const handleUsername = (e) => {
		setUsername(e.target.value);
		setUsernameError();
		if (!e.target.value) {
			setUsernameError('Input your username, please!');
		} else {
			setUsernameError('');
		}
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		if (!e.target.value) {
			setPasswordError('Input your password, please!');
		} else {
			setPasswordError('');
		}
	};

	const handleFocus = (e) => {
		switch (e.target.name) {
			case 'username':
				auth.isSuccess = false;
				break;
			case 'password':
				auth.isSuccess = false;
				break;

			default:
				break;
		}
	};

	const handleBlur = (e) => {
		switch (e.target.name) {
			case 'username':
				if (!e.target.value) {
					setUsernameError('Username is required!');
				}
				break;
			case 'password':
				if (!e.target.value) {
					setPasswordError('Password is required!');
				}
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!username && !password) {
			setUsernameError('Username is required!');
			setPasswordError('Password is required!');
		} else if (!username) {
			setUsernameError('Username is required!');
		} else if (!password) {
			setPasswordError('Password is required!');
		} else {
			dispatch(login(user));

			console.log(user);

			setUsername('');
			setPassword('');
		}
	};

	return (
		<div className="login__wrapper">
			<h2 className="login__head">Login</h2>
			<form className="login__form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="login__input"
					placeholder="Username"
					name="username"
					value={username}
					onChange={handleUsername}
					onFocus={handleFocus}
					onBlur={handleBlur}
				></input>
				{usernameError && (
					<span className="login__input-error">{usernameError}</span>
				)}
				<input
					type="password"
					className="login__input"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handlePassword}
					onFocus={handleFocus}
					onBlur={handleBlur}
				></input>
				{passwordError && (
					<span className="login__input-error">{passwordError}</span>
				)}
				<input type="submit" className="login__input"></input>
				{auth.errorMessage ? (
					<span className="login__input-error">{auth.errorMessage}</span>
				) : (
					auth.isSuccess && (
						<span className="login__input-success">Login success!</span>
					)
				)}
			</form>
			<Link to="/registration" className="login__link">
				<p>Registration</p>
			</Link>
		</div>
	);
}

export default Login;
