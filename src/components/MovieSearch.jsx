import React from 'react'
import '../movie-page-styles.css'
import { useState, useEffect } from 'react'
import MovieDisplay from './MovieDisplay'

export default function MovieSearch({ movieName }) {

    const [updatedMovieName, setMovieName] = useState(movieName)
    const [individualMovieData, setIndividualMovieData] = useState([])

    useEffect(() => {
        fetchMoviesData(updatedMovieName)
    }, [])

    const movieSearchChange = event => {
        setMovieName(event.target.value)
    }

    const enterKeySearch = event => {
        if (event.key === 'Enter' && updatedMovieName.length <= 0) {
            alert("Please search a movie name that is not blank.")
        }
        else if (event.key === 'Enter' && updatedMovieName.length > 0) {
            fetchMoviesData(updatedMovieName)
        }
    }

    async function fetchMoviesData(updatedMovieName) {
        let tempMovieFetchedData = []
        let tempIndividualMovieData = []

        if (updatedMovieName !== undefined || updatedMovieName != null) {
            updatedMovieName = updatedMovieName.replaceAll(" ", "+")

            try {
                const movieData = await (await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c33e1424&s=${updatedMovieName}&y=`)).json()

                if (movieData.Response === "True") {
                    tempMovieFetchedData = movieData.Search
                }
                else if (movieData.Response === "False") {
                    alert(`${movieData.Error} Please try your search again.`)
                }
            }
            catch (error) {
                alert("Error fetching movie data. Please try again.")
            }
        }

        for (let i = 0; i < 6; i++) {
            tempIndividualMovieData.push(tempMovieFetchedData[i])
        }

        setIndividualMovieData(tempIndividualMovieData)
    }

    return (
        <>
            <div className="navbar__input--wrapper">
                <h3>Search for your movie</h3>
                <input className="movie-search" id="movie-name"
                    value={updatedMovieName} onChange={movieSearchChange} onKeyDown={enterKeySearch} />
            </div>

            <section id="search">
                <div className="search-filter">
                    <h2 className="search-filter__info">
                        <span>Search results for </span>
                        <span className="red" id="movie-name-filter">{updatedMovieName}</span>
                    </h2>
                    <div className="year-filter">
                        <h2>
                            <span>Search by Year</span>
                        </h2>
                        <input type="number" min="1878" max="2025" className="year-filter__input" placeholder="e.g. 2025" />
                    </div>
                </div>

                <div className="movie-container">
                    {
                        individualMovieData.map((movie) => (
                            <MovieDisplay movie={movie} key={movie.imdbID} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
