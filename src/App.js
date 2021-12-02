import React, { Component } from 'react'
import Library from './Library'
import movieData from './movieData.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      singleMovie: {}
    }
  }

  displayMovie = (id) => {
    const movieDetails = this.state.movies.find((movie) => {
      return movie.id === id;
    })
    this.setState({singleMovie: movieDetails})
    console.log(this.state.singleMovie)
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Library movies={this.state.movies} displayMovie={this.displayMovie} />
      </main>
    )
  }
}

export default App;
