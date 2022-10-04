import React from 'react';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.scss';

const Header = () => (
  <header>
    <a href="/" className={style.logo}>
      <img
        src={`${process.env.PUBLIC_URL}images/logo.png`}
        alt="Space travelers hub logo"
      />
      <h1>Space Travelers Hub</h1>
    </a>
    <Navigation />
  </header>
);

export default Header;
