import React from 'react';
import './Page.css'

const Page = ({ movie, returnToMain }) => {
  // console.log(movie)
  return (
    <section className='movie-page'>
      <img className='page-img'src={movie.backdrop_path} />
      <article className='side-info'>
        <h2 className="movie-title">{movie.title}</h2>
        <h3 className="movie-rating">Audience Rating: {Math.round(movie.average_rating)}</h3>
        <p className="movie-plot">Movie Plot: Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.</p>
        <button onClick={() =>returnToMain()}>Return to All Movies!</button>
      </article>
    </section>
  )
}

export default Page;
