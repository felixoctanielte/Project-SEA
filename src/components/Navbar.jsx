import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>SEA Catering</h2>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/menu">Menu / Meal Plans</NavLink></li>
        <li><NavLink to="/subscription">Subscription</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
