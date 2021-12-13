const allMoviesData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
          .then(response => response.json())
}

const movieOverview = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
          .then(response => response.json())
}

const movieVideo = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
          .then(response => response.json())
}

export {
  allMoviesData,
  movieOverview,
  movieVideo
}
