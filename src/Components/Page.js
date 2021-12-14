import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video'
import '../CSS/Page.css';

const Page = ({ movie, overview, trailer }) => {
  return (
    <section className='movie-page'>
      <img className='page-img'src={movie.backdrop_path} alt={movie.title} data-cy="page-image"/>
      <article className='side-info'>
        <div className="title-container">
          <h2 className="movie-title">{movie.title}</h2>
          <Link to="/" style={{textDecoration: 'none'}} onClick={() => {this.props.refresh()}}><button className='return-button'>Return to All Movies!</button></Link>
        </div>
        <h3 className="movie-rating">Audience Rating: {Math.round(movie.average_rating)}/10</h3>
        <Video trailer={trailer}/>
        <p className="movie-plot">{overview}</p>
      </article>
    </section>
  )
}

export default Page;
