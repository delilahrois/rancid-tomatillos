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
      singleMovie: {id: '', poster_path: '', backdrop_path: '', title: '', average_rating: ''},
      trailer: '',
      movieOverview: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      this.setState({ movies: data.movies })
    })
    .catch(err => {
      this.setState({ error: 'Oops! Something went wrong. Refresh and try again.'})
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
            this.setState({ trailer: data.videos[0] })
          })
  }

  render() {
    return (
      <main>
        <h1 data-cy='page-title'>Rancid Tomatillos</h1>
        { this.state.error && <p>{this.state.error}</p> }
        <Routes>
          <Route path="/" element={<Library movies={this.state.movies} displayMovie={this.displayMovie}/>}/>
          <Route path="/:movieId" element={<Page movie={this.state.singleMovie}
            trailer={this.state.trailer} overview={this.state.movieOverview} key={this.state.singleMovie.id}/>}/>
        </Routes>
      </main>
    )
  }
}

export default App;
