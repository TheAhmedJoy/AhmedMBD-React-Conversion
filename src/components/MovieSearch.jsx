import React from 'react'

export default function MovieSearch() {
    return (
        <>
            <div className="navbar__input--wrapper">
                <h3>Search for your movie</h3>
                <input className="movie-search" placeholder="Search by Movie Name" type="text" />
            </div>

            <section id="search">
                <div className="search-filter">
                    <h2 className="search-filter__info">
                        <span>Search results for</span>
                        <span className="red" id="movie-name-filter">""</span>
                    </h2>
                    <div className="year-filter">
                        <h2>
                            <span>Search by Year</span>
                        </h2>
                        <input type="number" min="1878" max="2025" className="year-filter__input" placeholder="e.g. 2025" />
                    </div>
                </div>

                <div className="movie-container">
                    <div className="movie-container__row">
                        <div className="movie-list">
                            <div className="movie-list__item">
                                <div className="movie-card">
                                    <div className="movie-card__container">
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
