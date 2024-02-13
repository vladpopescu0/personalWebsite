import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Vlad Popescu. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
