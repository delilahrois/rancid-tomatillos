import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video'
import './Page.css';

const Page = ({ movie, overview, trailer }) => {
  return (
    <section className='movie-page'>
      <img className='page-img'src={movie.backdrop_path} alt={movie.title}/>
      <article className='side-info'>
        <h2 className="movie-title">{movie.title}</h2>
        <h3 className="movie-rating">Audience Rating: {Math.round(movie.average_rating)}</h3>
        <Video trailer={trailer}/>
        <p className="movie-plot">{overview}</p>
        <Link to="/"><button>Return to All Movies!</button></Link>
      </article>
    </section>
  )
}

export default Page;
