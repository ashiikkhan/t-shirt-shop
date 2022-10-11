import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <nav className='nav'>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        to='/home'>
        Homes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        to='/orders'>
        Orders
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        to='/grandcomp'>
        Grand Comp
      </NavLink>
    </nav>
  );
};

export default Header;
