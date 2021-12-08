import React, { Component } from 'react'
import Library from './Library'
import Page from './Page'
import { Routes, Route } from 'react-router-dom';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: {},
      trailer: null,
      movieOverview: null,
      error: null
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      this.setState({ movies: data.movies })
    })
    .catch(err => {
      console.log(err)
      this.setState({ error: err })
    })
  }

  displayMovie = (id) => {
    const movieDetails = this.state.movies.find((movie) => {
      return movie.id === id;
    })
    this.setState({ singleMovie: movieDetails })

      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ movieOverview: data.movie.overview })
        })

        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
          .then(response => response.json())
          .then(data => {
            this.setState({ trailer: data.videos[0].key })
          })
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        { this.state.error && <p>Oops! Something went wrong. Refresh and try again.</p> }
        <Routes>
          <Route path="/" element={<Library key='1' movies={this.state.movies} displayMovie={this.displayMovie}/>}/>
          <Route path="/:movieId" element={<Page movie={this.state.singleMovie}
                                                trailer={this.state.trailer}
                                                overview={this.state.movieOverview}
                                                key={this.state.singleMovie.id}/>}/>
        </Routes>
      </main>
    )
  }
}

export default App;
