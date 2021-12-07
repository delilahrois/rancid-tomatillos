import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Library from './Library'
import Page from './Page'
import movieData from './movieData.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      onMainPage: true,
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
    this.setState({ singleMovie: movieDetails, onMainPage: false })

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

  returnToMain = () => {
    this.setState({ onMainPage: true })
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <p>Oops! Something went wrong. Refresh and try again.</p> }
        <Routes>
          <Route path='/' element={<Library movies={this.state.movies} displayMovie={this.displayMovie} />} />
          <Route path='/:movieId' element={<Page movie={this.state.singleMovie} />} />
        </Routes>
      </main>
    )
  }
}


export default App;
