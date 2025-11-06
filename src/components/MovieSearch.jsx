import React from 'react'

export default function MovieSearch() {
    return (
        <>
            <div class="navbar__input--wrapper">
                <h3>Search for your movie</h3>
                <input class="movie-search" placeholder="Search by Movie Name" type="text" />
            </div>

            <section id="search">
                <div class="search-filter">
                    <h2 class="search-filter__info">
                        <span>Search results for</span>
                        <span class="red" id="movie-name-filter">""</span>
                    </h2>
                    <div class="year-filter">
                        <h2>
                            <span>Search by Year</span>
                        </h2>
                        <input type="number" min="1878" max="2025" class="year-filter__input" placeholder="e.g. 2025" />
                    </div>
                </div>

                <div class="movie-container">
                    <div class="movie-container__row">
                        <div class="movie-list">
                            <div class="movie-list__item">
                                <div class="movie-card">
                                    <div class="movie-card__container">
                                        <img id="movie-poster" src="" alt="Movie Poster" />
                                            <p><b>Movie name:</b> movie name</p>
                                            <p><b>Year:</b> movie year</p>
                                            <p><b>IMDb:</b> <a id="movie-imbd" href="https://website.website"
                                                target="_blank">website.website</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
