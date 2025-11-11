import React from 'react'
import '../movie-page-styles.css'
import { useLocation } from 'react-router-dom'
import MovieSearch from '../components/MovieSearch'
// import MovieDisplay from '../components/MovieDisplay'

export default function MoviesPage() {
    // const {movieName} = null
    // const useLocationStatus = useLocation().state

    // if (useLocationStatus === undefined || useLocationStatus === null) {
    //     movieName = "Search by Movie Name"
    // }
    // else {
    //     movieName = useLocation().state
    // }

    const {movieName} = useLocation().state ?? "Search by Movie Name"

    console.log(movieName)
    return (
        <>
            <MovieSearch movieName={movieName}/>
            {/* <MovieDisplay movieName={movieName}/> */}
        </>
    )
}
