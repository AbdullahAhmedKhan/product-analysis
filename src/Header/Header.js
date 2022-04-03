import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='menubar mb-5'>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/reviews'>Reviews</Link>
            <Link className='navlink' to='/dashboard'>Dashboard</Link>
            <Link className='navlink' to='/blogs'>Blogs</Link>
            <Link className='navlink' to='/about'>About</Link>
        </div>
    );
};

export default Header;