import React from 'react'
import '../movie-page-styles.css'
import { useState, useEffect } from 'react'
import MovieDisplay from './MovieDisplay'

export default function MovieSearch({ movieName }) {

    const [updatedMovieName, setMovieName] = useState(movieName)
    const [fetchedMovieData, setFetchedMovieData] = useState([])
    const [yearFilter, setYearFilter] = useState()

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
        else if (event.key === 'Enter') {
            fetchMoviesData(updatedMovieName)
        }
    }

    async function fetchMoviesData(updatedMovieName) {
        let tempFetchedMovieData = []

        if (updatedMovieName !== undefined || updatedMovieName != null) {
            updatedMovieName = updatedMovieName.replaceAll(" ", "+")

            try {
                const movieData = await (await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c33e1424&s=${updatedMovieName}&y=`)).json()

                if (movieData.Response === "True") {
                    tempFetchedMovieData = movieData.Search
                }
                else if (movieData.Response === "False") {
                    alert(`${movieData.Error} Please try your search again.`)
                }
            }
            catch (error) {
                alert("Error fetching movie data. Please try again.")
            }
        }

        setFetchedMovieData(tempFetchedMovieData.slice(0, 6))
    }

    function renderMovieDisplay() {
        if (fetchedMovieData.length === 0 || fetchedMovieData[0] === undefined) {
            return (
                <h1 className='red'>Please try your search again.</h1>
            )
        }

        if (yearFilter === "newToOld") {
            return fetchedMovieData
                .sort((a, b) => b.Year.toString(``).slice(0, 4) - a.Year.toString(``).slice(0, 4))
                .map((movie) => <MovieDisplay movieInfo={movie} key={movie.imdbID} />)
        }
        else if (yearFilter === "oldToNew") {
            return fetchedMovieData
                .sort((a, b) => a.Year.toString(``).slice(0, 4) - b.Year.toString(``).slice(0, 4))
                .map((movie) => <MovieDisplay movieInfo={movie} key={movie.imdbID} />)
        }

        return fetchedMovieData.map((movie) => <MovieDisplay movieInfo={movie} key={movie.imdbID} />)
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
                    <div className="movie-filter">
                        <select className="movie-filter__option" defaultValue=""
                            onChange={(event) => setYearFilter(event.target.value)}>
                            <option value="" disabled>Filter by Year</option>
                            <option value="newToOld">Newest to Oldest</option>
                            <option value="oldToNew">Oldest to Newest</option>
                        </select>
                    </div>
                </div>

                <div className="movie-container">
                    {
                        renderMovieDisplay()
                    }
                </div>
            </section>
        </>
    )
}
