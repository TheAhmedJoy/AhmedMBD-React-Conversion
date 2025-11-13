import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../movie-info-page.css'
import MoviePosterMissing from '../assets/movie-poster-missing.jpg'

export default function MovieInfoPage() {
  const { movieID } = useParams()

  const [fetchedMovieData, setFetchedMovieData] = useState([])

  useEffect(() => {
    fetchMovieData()
  }, [])

  async function fetchMovieData() {
    let tempMovieData = []

    try {
      const movieData = await (await fetch(`https://www.omdbapi.com/?apikey=c33e1424&i=${movieID}&plot=full`)).json()
      tempMovieData = movieData
    }
    catch (error) {
      alert("Error fetching movie data. Please try again.")
    }

    setFetchedMovieData(tempMovieData)
    console.log(fetchedMovieData)
  }

  return (
    <>
      <div className="movie-info">
        <img id="image-poster" src={(fetchedMovieData.Poster !== "N/A" ? fetchedMovieData.Poster : MoviePosterMissing)} alt="Movie Poster" />
        <div className="movie-descriptions">
          <h2>Title: {fetchedMovieData.Title}</h2>
          <h2>Actors: {fetchedMovieData.Actors}</h2>
          <h2>Director: {fetchedMovieData.Director}</h2>
          <h2>Writer(s): {fetchedMovieData.Writer}</h2>
          <h2>Genre: {fetchedMovieData.Genre}</h2>
          <h2>Year of Release:{fetchedMovieData.Year}</h2>
          <h2>IMDb rating: {fetchedMovieData.imdbRating}</h2>
          <h2>IMDb page:</h2><a href={`https://www.imdb.com/title/${fetchedMovieData.imdbID}`}
            target="_blank">https://www.imdb.com/title/{fetchedMovieData.imdbID}</a>
        </div>
      </div>
    </>
  )
}
