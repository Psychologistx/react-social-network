import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://www.logaster.com/blog/wp-content/uploads/2018/05/LogoMakr.png" alt="" />

			<div className={s.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>} 
			</div>
		</header>
	)
};

export default Header;