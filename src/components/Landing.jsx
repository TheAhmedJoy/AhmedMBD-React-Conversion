import React from 'react'
import '../index.css';
import LandingImg from '../assets/landing-page-img.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Landing() {
    return (
        <section id="landing-page">
            <div className="landing-page__wrapper">
                <div className="landing-page__wrapper--intro">
                    <h1 className="red">The best movie database</h1>
                    <h3>Find more information about your favorite <span class="red">movies!</span></h3>
                </div>
                <div className="landing-page__input--wrapper">
                    <input className="movie-search" id="movie-name" placeholder="Search by Movie Name" type="text" />
                    <button className="movie-search-button" id="movie-name">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                <img src={LandingImg} alt="Movie Watching"/>
            </div>
        </section>
    )
}
