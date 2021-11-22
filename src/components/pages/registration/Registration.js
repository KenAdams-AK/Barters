import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

function Registration() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');
	const [submitError, setSubmitError] = useState('');

	const [submitSuccess, setSubmitSuccess] = useState(false);

	const newUser = {
		username: username,
		password: password,
	};

	const usernameValidRegex = /^(?=[a-zA-Z._]{3,12}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
	const passwordValidRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

	const handleUsername = (e) => {
		setUsername(e.target.value);
		if (!usernameValidRegex.test(String(e.target.value))) {
			setUsernameError(
				'Username requires 3 to 12 characters, only latin letters can be used!'
			);
		} else {
			setUsernameError('');
		}
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		if (!passwordValidRegex.test(e.target.value)) {
			setPasswordError(
				'Password requires 8 to 20 characters, at least one letter and one number!'
			);
		} else {
			setPasswordError();
		}
	};

	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
		if (password !== e.target.value) {
			setConfirmPasswordError('Passwords do not match!');
		} else {
			setConfirmPasswordError();
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
			case 'confirmPassword':
				if (!e.target.value) {
					setConfirmPasswordError('Confirm password is required!');
				}
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!username ||
			!password ||
			!confirmPassword ||
			usernameError ||
			passwordError ||
			confirmPasswordError
		) {
			setSubmitError('Invalid input!');
		} else {
			axios
				.post('http://localhost:4000/register', newUser)
				.then((response) => {
					console.log(response);

					setSubmitSuccess(true);
					setUsername('');
					setPassword('');
					setConfirmPassword('');
				})
				.catch((error) => {
					setSubmitError(error?.response?.data?.message);
					console.log(error.response.data);
				});

			console.log(newUser);
		}
	};

	return (
		<div className="reg__wrapper">
			<h2 className="reg__head">Registration</h2>
			{(submitSuccess && (
				<div className="reg__success">
					<h2>Congratulations!</h2>
					<h3>You registered successfully!</h3>
					<p>
						Please,{' '}
						<Link to="/login" className="reg__success-link">
							login
						</Link>{' '}
						to the system!
					</p>
				</div>
			)) || (
				<form className="reg__form" onSubmit={handleSubmit}>
					<input
						className="reg__input"
						type="text"
						placeholder="Put your name!"
						name="username"
						value={username}
						onChange={handleUsername}
						onBlur={handleBlur}
					/>
					{usernameError && (
						<span className="reg__input-error">{usernameError}</span>
					)}

					<input
						className="reg__input"
						type="password"
						placeholder="Put your password!"
						name="password"
						value={password}
						onChange={handlePassword}
						onBlur={handleBlur}
					/>
					{passwordError && (
						<span className="reg__input-error">{passwordError}</span>
					)}
					<input
						className="reg__input"
						type="password"
						placeholder="Confirm your password!"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleConfirmPassword}
						onBlur={handleBlur}
					/>
					{confirmPasswordError && (
						<span className="reg__input-error">{confirmPasswordError}</span>
					)}

					<input className="reg__input" type="submit" />
					{submitError && (
						<span className="reg__input-error">{submitError}</span>
					)}
				</form>
			)}
		</div>
	);
}

export default Registration;
