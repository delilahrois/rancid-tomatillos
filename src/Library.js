import React from 'react'
import Movie from './Movie'

const Library = ({ movies }) => {
  const moviePosters = movies.map(movie => {
    return (
      <Movie
        title={movie.title}
        rating={movie.average_rating}
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
