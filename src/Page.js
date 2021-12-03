import React from 'react';
import './Page.css'

const Page = (movie) => {
  console.log(movie)
  return (
    <div className='movie-page'>
      <img src={movie.movie.backdrop_path} />
      <h2>{movie.movie.title}</h2>
      <h3>Audience Rating: {Math.round(movie.movie.average_rating)}</h3>
      <p>Movie Plot: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default Page;
