import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        // Responsive BS Navbar
        <header className="Nav-Head">
            <nav className="navbar navbar-expand-sm navbar-dark container col-md-7">
                <a className="navbar-brand" href="/">
                    <img
                        src="/assets/img/nav-pic-01.jpg"
                        width="32" height="32"
                        className="d-inline-block align-top"
                        alt="#"
                    />
                    Diego Hernandez
                </a>
                {/* collapsible navbar logic */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* collapsible navbar content */}
                {/* <article className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto"> */}
                <article className="" id="">
                    <div className="navbar-nav mr-auto">

                        <div className="nav-item nav-link">
                            <Link to="/">
                                <span className="Nav-Text">Home</span>
                            </Link>
                        </div>

                        <div className="nav-item nav-link">
                            <Link to="/portfolio">
                                <span className="Nav-Text">Portfolio</span>
                            </Link>
                        </div>

                        <div className="nav-item nav-link">
                            <Link to="/contact">
                                <span className="Nav-Text">Contact</span>
                            </Link>
                        </div>

                    </div>
                </article>
            </nav>
        </header>
    );
};

export default Navbar;

