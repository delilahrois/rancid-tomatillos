import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import './Library.css';

const Library = ({ movies, displayMovie, foundMovies }) => {
  let moviePosters;
  if(foundMovies.length) {
    moviePosters = foundMovies.map(movie => {
      return (
        <Link to={`/${movie.id}`} key={movie.id}>
          <Movie
            posterImg={movie.poster_path}
            title={movie.title}
            rating={Math.round(movie.average_rating)}
            id={movie.id}
            displayMovie={displayMovie}
          />
        </Link>
      )
    })
  } else {
    moviePosters = movies.map(movie => {
      return (
        <Link to={`/${movie.id}`} key={movie.id}>
          <Movie
            posterImg={movie.poster_path}
            title={movie.title}
            rating={Math.round(movie.average_rating)}
            id={movie.id}
            displayMovie={displayMovie}
          />
        </Link>
      )
    })

  }
  // const moviePosters = movies.map(movie => {
  //   return (
  //     <Link to={`/${movie.id}`} key={movie.id}>
  //       <Movie
  //         posterImg={movie.poster_path}
  //         title={movie.title}
  //         rating={Math.round(movie.average_rating)}
  //         id={movie.id}
  //         displayMovie={displayMovie}
  //       />
  //     </Link>
  //   )
  // })

  return (
    <div className='movie-grid'>
      {moviePosters}
    </div>
  )
}

export default Library;
