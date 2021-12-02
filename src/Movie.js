import React from 'react'
import './Movie.css'

const Movie = ({ posterImg, title, rating, id, displayMovie }) => {
  return(
    <div className="movie-poster">
      <img src={posterImg} alt={title} onClick={() => displayMovie(id)} />
      <h3>{title}</h3>
      <h4>Average rating: {rating}</h4>
    </div>
  )
}

export default Movie
