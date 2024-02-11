import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="nav-links">
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Vlad Popescu. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
