import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = { textDecoration: 'underline' };

  return (
    <nav>
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
          <NavLink>Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
