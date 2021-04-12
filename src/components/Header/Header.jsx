import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img src="https://www.logaster.com/blog/wp-content/uploads/2018/05/LogoMakr.png" alt="" />
		</header>
	)
};

export default Header;