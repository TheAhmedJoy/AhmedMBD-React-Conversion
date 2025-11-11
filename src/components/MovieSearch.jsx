import React from 'react'
import { useState, useEffect } from 'react'
import MovieDisplay from './MovieDisplay'

export default function MovieSearch({ movieName }) {

    const [updatedMovieName, setMovieName] = useState(movieName)
    const [movieSearchData, setMovieSearchData] = useState()

    useEffect(() => {
        console.log("from use effect")
        fetchMoviesData(updatedMovieName)
    }, [])

    const movieSearchChange = event => {
        setMovieName(event.target.value)
        console.log(updatedMovieName)
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
        if (updatedMovieName !== undefined || updatedMovieName != null) {
            updatedMovieName = updatedMovieName.replaceAll(" ", "+")

            try {
                const movieData = await (await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c33e1424&s=${updatedMovieName}&y=`)).json()
                setMovieSearchData(movieData.Search)
            }
            catch (error) {
                console.log(error)
                alert("Error fetching movie data. Please try again.")
            }
        }
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
            </section>
        </>
    )
}
