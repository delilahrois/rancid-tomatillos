import React from 'react';
import './Movie.css';

const Movie = ({ posterImg, title, id, displayMovie }) => {
  return(
    <div className="movie-poster">
      <img className='poster-img'src={posterImg} alt={title} onClick={() => displayMovie(id)} />
    </div>
  )
}

export default Movie;
