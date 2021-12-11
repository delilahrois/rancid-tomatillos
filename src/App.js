import React, { Component } from 'react';
import Library from './Library';
import Page from './Page';
import Input from './Input';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {id: '', poster_path: '', backdrop_path: '', title: '', average_rating: ''},
      trailer: '',
      movieOverview: '',
      error: '',
      isLoaded: false,
      foundMovies: []
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      this.setState({ movies: data.movies, isLoaded: true })

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
        this.setState({ trailer: data.videos[0] })
    })
  }

  setSingleMovie = (id) => {
    const movieDetails = this.state.movies.find((movie) => {
      return movie.id === id;
    })
    if(id) {
      this.setState({ foundMovies: [ movieDetails ] })
    }
  }

  refreshState = () => {
    this.setState(
      {
        movies: [],
        singleMovie: {id: '', poster_path: '', backdrop_path: '', title: '', average_rating: ''},
        trailer: '',
        movieOverview: '',
        error: '',
        isLoaded: false,
        foundMovies: []
      }
    )
    this.componentDidMount();
  }

  render() {
    return (  
      <main>
        <NavLink to={`/`} style={{textDecoration: 'none'}} onClick={() => {this.refreshState()}}>
          <h1 class="header">Rancid Tomatillos</h1>
        </NavLink>
        { this.state.error && <p>Oops! Something went wrong. Refresh and try again.</p> }
        <Input setSingleMovie={this.setSingleMovie} setInputs={this.setInputs} movies={this.state.movies} refresh={this.refreshState}/>
        <Routes>
          <Route path="/" element={<Library movies={this.state.movies} displayMovie={this.displayMovie} foundMovies={this.state.foundMovies}/>}/>
          <Route path="/:movieId" element={<Page movie={this.state.singleMovie}
            trailer={this.state.trailer} overview={this.state.movieOverview} key={this.state.singleMovie.id} refresh={this.refreshState}/>}/>
        </Routes>
      </main>
    )
  }
}

export default App;
