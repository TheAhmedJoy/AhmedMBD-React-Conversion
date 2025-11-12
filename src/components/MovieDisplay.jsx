import React from 'react'
import '../movie-page-styles.css'
import MoviePosterMissing from '../assets/movie-poster-missing.jpg'

export default function MovieDisplay({ movie }) {

  return (
    <>
      <div className="movie-container__row">
        <div className="movie-list">
          <div className="movie-list__item">
            <div className="movie-card">
              <div className="movie-card__container">
                <img id="movie-poster" src={(movie.Poster !== "N/A" ? movie.Poster : MoviePosterMissing)} alt="Movie Poster" />
                <p><b>Movie name: </b>{movie.Title}</p>
                <p><b>Year:</b> {movie.Year}</p>
                <p><b>IMDb:</b> <a id="movie-imbd" href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank">https://www.imdb.com/title/{movie.imdbID}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}