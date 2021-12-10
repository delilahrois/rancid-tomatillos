import React from 'react';


const Filter = ({ movies, searchInput, ratingSelect }) => {

 // 3, 4, 5, 6, 7 ratings
  
  const findMovie = movies.find((movie) => {
    return movie.title === searchInput || movie.title === searchInput.toLowerCase() || movie.title === searchInput.toUpperCase();
  })

  const filterMovies = movies.filter((movie) => {
    if(ratingSelect === 'low') {
      return movie.rating < 5;
    } else if (ratingSelect === 'mid') {
      return movie.rating >= 5 && movie.rating < 6;
    } else {
      return movie.rating > 6;
    }
  })

  if(searchInput) {
    findMovie();
  } else {
    filterMovies();
  }
}

export default Filter;