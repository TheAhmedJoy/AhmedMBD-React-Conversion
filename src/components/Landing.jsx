import React from 'react'
import '../index.css';
import LandingImg from '../assets/landing-page-img.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    const [movieName, setMovieName] = useState("Search by Movie Name")

    const movieSearchChange = event => {
        setMovieName(event.target.value)
    }

    const enterKeySearch = event => {
        if (event.key === 'Enter') {
            // <Link to='/MoviesPage' />
            // Not working as anticipated
            console.log("entered")
        }

        if (movieName.length <= 0) {
            // <Link to='/MoviesPage' />
            // Not working as anticipated
            alert("Please search a movie name that is not blank.")
        }
    }

    function clickSearch() {
        console.log("clicked")
    }

    return (
        <section id="landing-page">
            <div className="landing-page__wrapper">
                <div className="landing-page__wrapper--intro">
                    <h1 className="red">The best movie database</h1>
                    <h3>Find more information about your favorite <span className="red">movies!</span></h3>
                </div>
                <div className="landing-page__input--wrapper">
                    <input className="movie-search" id="movie-name"
                        value={movieName} onChange={movieSearchChange} onKeyDown={enterKeySearch} />
                    <button className="movie-search-button" id="movie-name" onClick={clickSearch}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                <img src={LandingImg} alt="Movie Watching" />
            </div>
        </section>
    )
}
