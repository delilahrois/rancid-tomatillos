import React from 'react'

const Movie = ({ title, rating }) => {
  return(
    <div>
      <h3>{title}</h3>
      <h4>{rating}</h4>
    </div>
  )
}

export default Movie
