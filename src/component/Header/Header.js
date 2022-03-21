import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='menu'>
            <h3>Header component</h3>
            <nav>
                <a href="./home">Home</a>
                <a href="./explore">Explore</a>
                <a href="./about">AboutUs</a>
                <a href="./contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;