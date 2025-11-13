import React from 'react'
import '../movie-page-styles.css'
import MoviePosterMissing from '../assets/movie-poster-missing.jpg'
import { useNavigate } from 'react-router-dom'


export default function MovieDisplay({ movieInfo }) {
  let navigate = useNavigate()

  function movieInfoPage(movieID) {
    navigate(`/MovieInfoPage/${movieID}`)
  }

  return (
    <>
      <div className="movie-container__row">
        <div className="movie-list">
          <div className="movie-list__item">
            <div className="movie-card">
              <div className="movie-card__container">
                <img id="movie-poster" src={(movieInfo.Poster !== "N/A" ? movieInfo.Poster : MoviePosterMissing)} alt="Movie Poster"
                  onClick={() => movieInfoPage(movieInfo.imdbID)} />
                <p><b>Movie name: </b>{movieInfo.Title}</p>
                <p><b>Year:</b> {movieInfo.Year}</p>
                <p><b>IMDb:</b> <a id="movie-imbd" href={`https://www.imdb.com/title/${movieInfo.imdbID}`}
                  target="_blank">https://www.imdb.com/title/{movieInfo.imdbID}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}