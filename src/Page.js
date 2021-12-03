import React from 'react';
import './Page.css'

const Page = ({movie, returnToMain}) => {
  // console.log(movie)
  return (
    <div className='movie-page'>
      <button onClick={() =>returnToMain()}>Return to All Movies!</button>
      <img src={movie.backdrop_path} />
      <h2>{movie.title}</h2>
      <h3>Audience Rating: {Math.round(movie.average_rating)}</h3>
      <p>Movie Plot: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default Page;