import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news">News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music">Music</NavLink>
			</div>
			<br/>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
			</div>
			<br/>
			<div className={s.item}>
				<NavLink to="/settings">Settings</NavLink>
			</div>
		</nav>
	)
};

export default Navbar;