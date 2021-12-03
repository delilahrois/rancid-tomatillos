import React, { Component } from 'react'
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
  }

  returnToMain = () => {
    this.setState({ onMainPage: true })
  }

  render() {
    return (
    this.state.onMainPage ?
      (<main>
        <h1>Rancid Tomatillos</h1>
        { this.state.error && <p>Oops! Something went wrong. Refresh and try again.</p> }
        <Library movies={this.state.movies} displayMovie={this.displayMovie} />
      </main> ):
      (<main>
          <h1>Rancid Tomatillos</h1>
          { this.state.error && <p>Oops! Something went wrong. Refresh and try again.</p> }
           <Page movie={this.state.singleMovie} returnToMain={this.returnToMain} />
        </main>)
    )
  }
}

export default App;
