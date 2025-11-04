import React from 'react'
import '../index.css';
import NavLogo from '../assets/AhmedMDB-Logo.png'

export default function Navbar() {
    return (
        <header id="home">
            <nav>
                <figure>
                    <img id="navbar-logo" src={NavLogo} />
                </figure>
                <ul class="nav__link--list">
                    <li class="nav__link--list-item">
                        <a href="index.html" class="nav__link--anchor link__hover-effect link__hover-effect--black">Home</a>
                    </li>
                    <li class="nav__link--list-item">
                        <a href="movie-page.html" class="nav__link--anchor link__hover-effect link__hover-effect--black">Find your
                            movie</a>
                    </li>
                    <li class="nav__link--list-item click">
                        <a href="#" class="nav__link--anchor">
                            <button class="nav__link--contact-button">Contact</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
