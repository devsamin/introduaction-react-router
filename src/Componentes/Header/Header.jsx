import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;