import React from 'react'
import '../movie-page-styles.css'
import { useState, useEffect } from 'react'
import MovieDisplay from './MovieDisplay'

export default function MovieSearch({ movieName }) {

    const [updatedMovieName, setMovieName] = useState(movieName)
    const [fetchedMovieData, setFetchedMovieData] = useState([])
    const [isSortByYearAlpha, setIsSortByYearAlpha] = useState(true)

    console.log(isSortByYearAlpha)

    useEffect(() => {
        fetchMoviesData(updatedMovieName)
    }, [])

    useEffect(() => {
        if (isSortByYearAlpha) {
            fetchedMovieData.sort((a, b) => a.Title.localeCompare(b.Title))
        }
        else if (!isSortByYearAlpha) {
            fetchedMovieData.sort((a, b) => a.Year.localeCompare(b.Year))
        }

    }, [isSortByYearAlpha, fetchedMovieData])

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
                        <h2>
                            <span>Sort by</span>
                        </h2>
                        <select className="movie-filter__input" value={isSortByYearAlpha}
                            onChange={(event) => setIsSortByYearAlpha(event.target.value)}>
                            <option value={false}>Year </option>
                            <option value={true}>Alphabetical </option>
                        </select>
                    </div>
                </div>

                <div className="movie-container">
                    {
                        (fetchedMovieData.length === 0 || fetchedMovieData[0] === undefined) ?
                            (
                                <h1 className='red'>Please try your search again.</h1>
                            ) :
                            (
                                fetchedMovieData.map((movie) => (
                                    <MovieDisplay movieInfo={movie} key={movie.imdbID} />
                                ))
                            )
                    }
                </div>
            </section>
        </>
    )
}
