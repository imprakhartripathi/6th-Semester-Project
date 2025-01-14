import React from 'react';
import reactLogo from './../../assets/react.svg'; 
import './Navbar.scss'; // Import your SCSS file.

const Navbar : React.FC = () => {
  return (
    <div className="navbar">
      <img src={reactLogo} alt="React Logo" className="logo" />
    </div>
  );
};

export default Navbar;
