import React from 'react'
import '../movie-page-styles.css'
import { useLocation } from 'react-router-dom'
import MovieSearch from '../components/MovieSearch'

export default function MoviesPage() {
    const {movieName} = useLocation().state ?? "Search by Movie Name"

    return (
        <>
            <MovieSearch movieName={movieName}/>
        </>
    )
}
