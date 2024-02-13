// Header.js
import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="title">
                <h1>vlad-popescu.com</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
