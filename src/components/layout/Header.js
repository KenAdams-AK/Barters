import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
	return (
		<div className="header__wrapper">
			<nav className="header__navBar">
				<Link to="/" className="header__link">
					<h2 className="header__logo">Logo</h2>
				</Link>
				<ul className="header__list">
					<Link to="/login" className="header__link">
						<li className="header__item">Login</li>
					</Link>
					<Link to="/registration" className="header__link">
						<li className="header__item">Registration</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
