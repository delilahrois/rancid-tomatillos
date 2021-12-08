import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const Page = ({ movie, overview, trailer }) => {
  return (
    <section className='movie-page'>
      <img className='page-img'src={movie.backdrop_path} alt={movie.title}/>
      <article className='side-info'>
        <h2 className="movie-title">{movie.title}</h2>
        <h3 className="movie-rating">Audience Rating: {Math.round(movie.average_rating)}</h3>
        <div className="video-responsive">
         <iframe
           width="400"
           height="240"
           src={`https://www.youtube.com/embed/${trailer}`}
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           title="Embedded youtube"
           />
        </div>
        <p className="movie-plot">{overview}</p>
        <Link to="/"><button>Return to All Movies!</button></Link>
      </article>
    </section>
  )
}

export default Page;
