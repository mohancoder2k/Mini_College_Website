

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/admissions" className="nav-link">
          Admissions
        </Link>
        <Link to="/new-students" className="nav-link">
        Students
        </Link>
        
      </div>
    </nav>
  );
};

export default NavBar;
