import React from 'react'
import '../movie-page-styles.css'
import MovieSearch from '../components/MovieSearch'
import MovieDisplay from '../components/MovieDisplay'

export default function MoviesPage() {
    return (
        <>
            <MovieSearch />
            <MovieDisplay />
        </>
    )
}
