import React from 'react'
import './Movie.css'

const Movie = ({ posterImg, title, rating, id, displayMovie }) => {
  return(
    <div className="movie-poster">
      <img className='poster-img'src={posterImg} alt={title} onClick={() => displayMovie(id)} />
      <h3 className='poster-title'>{title}</h3>
      <h4 className='poster-rating'>Average rating: {rating}</h4>
    </div>
  )
}

export default Movie
