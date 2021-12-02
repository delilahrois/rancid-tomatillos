import React, { Component } from 'react'
import Library from './Library'
import movieData from './movieData.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }
  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Library movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
