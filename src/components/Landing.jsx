import React from 'react'
import '../index.css';
import LandingImg from '../assets/landing-page-img.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Landing() {
    return (
        <section id="landing-page">
            <div class="landing-page__wrapper">
                <div class="landing-page__wrapper--intro">
                    <h1 class="red">The best movie database</h1>
                    <h3>Find more information about your favorite <span class="red">movies!</span></h3>
                </div>
                <div class="landing-page__input--wrapper">
                    <input class="movie-search" id="movie-name" placeholder="Search by Movie Name" type="text" />
                    <button class="movie-search-button" id="movie-name">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                <img src={LandingImg} />
            </div>
        </section>
    )
}
