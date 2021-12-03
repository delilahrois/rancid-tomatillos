import React, { Component } from 'react'
import Library from './Library'
import Page from './Page'
import movieData from './movieData.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      onMainPage: true,
      singleMovie: {},
    }
  }

  displayMovie = (id) => {
    const movieDetails = this.state.movies.find((movie) => {
      return movie.id === id;
    })
    this.setState({singleMovie: movieDetails, onMainPage: false})

  }

  render() {
    return (
    this.state.onMainPage ?
      (<main>
        <h1>Rancid Tomatillos</h1>
        <Library movies={this.state.movies} displayMovie={this.displayMovie} />
      </main> ):
      (<main>
          <h1>Rancid Tomatillos</h1>
           <Page movie={this.state.singleMovie} />
        </main>)
    )
  }

}
export default App;
