import React from 'react'
import '../index.css';
import NavLogo from '../assets/AhmedMDB-Logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

    function contactAlert() {
        alert("Not implemented")
    }

    return (
        <header id="home">
            <nav>
                <figure>
                    <img id="navbar-logo" src={NavLogo} alt="Navbar Logo"/>
                </figure>
                <ul className="nav__link--list">
                    <li className="nav__link--list-item">
                        <Link to="/" className="nav__link--anchor link__hover-effect link__hover-effect--black">Home</Link>
                    </li>
                    <li className="nav__link--list-item">
                        <Link to="/MoviesPage" className="nav__link--anchor link__hover-effect link__hover-effect--black">Find your Movie</Link>
                    </li>
                    <li className="nav__link--list-item click">
                        <a href={null} className="nav__link--anchor">
                            <button className="nav__link--contact-button" onClick={contactAlert}>Contact</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
