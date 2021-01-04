import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-brand">
                <span>Diego Hernandez</span>
            </div>

            <ul className="Navbar-links">
                <li className="Navbar-link">
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li className="Navbar-link">
                    <Link to="/portfolio">
                        Portfolio
                    </Link>
                </li>

                <li className="Navbar-link">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

