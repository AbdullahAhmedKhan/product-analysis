import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='menubar mb-5'>
            <Link className='navlink' to='/'>HOME</Link>
            <Link className='navlink' to='/reviews'>REVIEWS</Link>
            <Link className='navlink' to='/dashboard'>DASHBOARD</Link>
            <Link className='navlink' to='/blogs'>BLOGS</Link>
            <Link className='navlink' to='/about'>ABOUT</Link>
        </div>
    );
};

export default Header;