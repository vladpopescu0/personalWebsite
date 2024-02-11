// Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="title">
                <h1>vlad-popescu.com</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
