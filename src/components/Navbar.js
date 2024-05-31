import React, { useState } from 'react';
import './Navbar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <MenuIcon className="menu-icon" onClick={() => setIsActive(!isActive)} /> 
      <ul className={`navbar-links ${isActive ? 'active' : ''}`}>
        <li><a href="/products">Home</a></li>
        <li className='prod'><a href="/products" >Products</a></li>
        <li><a href="/collections">Collections</a></li>
        <li><a href="/inspirations">Inspirations</a></li>
        <li><a href="/media">Media</a></li>
        <li><a href="/brand">Brand</a></li>
      </ul>
      <div className="navbar-icons">
        <AccountCircleIcon />
        <SearchIcon />
        <ShoppingCartIcon />
      </div>
    </nav>
  );
};

export default Navbar;