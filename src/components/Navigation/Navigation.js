import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation = () => {
  const activeStyle = { textDecoration: 'underline' };

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink
            to="/rockets"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dragons"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dragons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myprofile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
