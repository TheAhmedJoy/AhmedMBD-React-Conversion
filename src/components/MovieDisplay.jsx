import React from 'react'

export default function MovieDisplay({ movieSearchData }) {
  console.log("From movie display")

  console.log(movieSearchData)
  console.log("Attempting map")

  return (
    <>
      <div className="movie-container">
        <div className="movie-container__row">
          <div className="movie-list">
            <div className="movie-list__item">
              <div className="movie-card">
                <div className="movie-card__container">
                  <img id="movie-poster" src="" alt="Movie Poster" />
                  <p><b>Movie name: </b> movie name</p>
                  <p><b>Year:</b> movie year</p>
                  <p><b>IMDb:</b> <a id="movie-imbd" href="https://website.website"
                    target="_blank">website.website</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
