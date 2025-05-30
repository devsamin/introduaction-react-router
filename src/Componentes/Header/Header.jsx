import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <Link to='/'>Home</Link>
            <NavLink to="/services">Services</NavLink>
            <Link to='/albums'>Album</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;