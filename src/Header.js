// Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="title">
                <h1>Vlad Popescu</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
