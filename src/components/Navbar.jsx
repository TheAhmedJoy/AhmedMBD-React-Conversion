import React from 'react'
import '../index.css';
import NavLogo from '../assets/AhmedMDB-Logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header id="home">
            <nav>
                <figure>
                    <img id="navbar-logo" src={NavLogo} alt="Navbar Logo"/>
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__link--list-item">
                        {/* <Link to="/" className="nav__link--anchor link__hover-effect link__hover-effect--black">Home</Link> */}
                        <a href="/" className="nav__link--anchor link__hover-effect link__hover-effect--black">Home</a>
                    </li>
                    <li className="nav__link--list-item">
                        {/* <Link to="/MoviesPage" className="nav__link--anchor link__hover-effect link__hover-effect--black">Find your Movie</Link> */}
                        <a href="movie-page.html" className="nav__link--anchor link__hover-effect link__hover-effect--black">Find your
                            movie</a>
                    </li>
                    <li className="nav__link--list-item click">
                        <a href="index.html" className="nav__link--anchor">
                            <button className="nav__link--contact-button">Contact</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
