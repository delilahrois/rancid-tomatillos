import React from 'react';
import { Route } from'react-router-dom'
import Library from './Library'

import './Page.css'

const Page = ({ movie, overview, trailer, returnToMain }) => {

  return (
    <section className='movie-page'>

      <img className='page-img'src={movie.backdrop_path} />
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
        <button onClick={() =>returnToMain()}>Return to All Movies!</button>
      </article>

    </section>
  )
}

export default Page;
