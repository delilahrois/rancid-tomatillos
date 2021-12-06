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
      movieVideo: null,
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
            this.setState({ movieVideo: data.videos.id })
          })
            console.log(this.state.movieVideo)

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
           <Page movie={this.state.singleMovie}
                 overview={this.state.movieOverview}
                 trailer={this.state.movieVideo}
                 returnToMain={this.returnToMain} />
        </main>)
    )
  }
}

export default App;
