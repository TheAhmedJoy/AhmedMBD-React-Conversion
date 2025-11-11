import React from 'react'
import '../movie-page-styles.css'
import MoviePosterMissing from '../assets/movie-poster-missing.jpg'

export default function MovieDisplay({ movieName, movieYear, moviePoster, movieIMDBid }) {

  return (
    <>
      <div className="movie-container">
        <div className="movie-container__row">
          <div className="movie-list">
            <div className="movie-list__item">
              <div className="movie-card">
                <div className="movie-card__container">
                  <img id="movie-poster" src={(moviePoster !== "N/A" ? moviePoster : MoviePosterMissing)} alt="Movie Poster" />
                  <p><b>Movie name: </b>{movieName}</p>
                  <p><b>Year:</b> {movieYear}</p>
                  <p><b>IMDb:</b> <a id="movie-imbd" href={`https://www.imdb.com/title/${movieIMDBid}`}
                    target="_blank">https://www.imdb.com/title/{movieIMDBid}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}