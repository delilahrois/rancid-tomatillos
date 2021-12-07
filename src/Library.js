import React from 'react'
import Movie from './Movie'
import './Library.css'

const Library = ({ movies, displayMovie }) => {
  const moviePosters = movies.map(movie => {
    return (
      <Movie
        posterImg={movie.poster_path}
        title={movie.title}
        rating={Math.round(movie.average_rating)}
        id={movie.id}
        displayMovie={displayMovie}
      />
    )
  })

  return (
    <div className='movie-grid'>
      {moviePosters}
    </div>
  )
}

export default Library
