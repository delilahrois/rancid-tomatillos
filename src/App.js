import React, { Component } from 'react';
import Library from './Library';
import Page from './Page';
import './App.css';
import { allMoviesData, movieOverview, movieVideo } from './api-calls.js';
import Input from './Input';
import { Routes, Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {id: '', poster_path: '', backdrop_path: '', title: '', average_rating: ''},
      trailer: '',
      movieOverview: '',
      error: '',
      foundMovies: []
    }
  }

  componentDidMount = () => {
    return allMoviesData().then(data => this.setState({ movies: data.movies, isLoaded: true }))
            .catch(err => {
                this.setState({ error: 'Oops! Something went wrong. Refresh and try again.'})
              })
    }

  displayMovie = (id) => {
    const movieDetails = this.state.movies.find((movie) => {
      return movie.id === id;
    })
    this.setState({ singleMovie: movieDetails })

    movieOverview(id).then(data => {this.setState({ movieOverview: data.movie.overview })})
      .catch(err => {
        this.setState({ error: 'Oops! Something went wrong. Refresh and try again.'})
      })
    movieVideo(id).then(data => {this.setState({ trailer: data.videos[0] })})
      .catch(err => {
        this.setState({ error: 'Oops! Something went wrong. Refresh and try again.'})
      })
  }

  setFilteredMovies = (filteredMovies) => {
    if(filteredMovies) {
      this.setState({ foundMovies:  filteredMovies  })
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
        foundMovies: []
      }
    )
    this.componentDidMount();
  }

  render() {
    return (
      <main>
        <header>
          <NavLink to={`/`} style={{textDecoration: 'none'}} onClick={() => {this.refreshState()}}>
            <h1 className="header">Rancid Tomatillos</h1>
          </NavLink>
          <p className='error-message'>{this.state.error}</p>
          <Input setSingleMovie={this.setSingleMovie} setFilteredMovies={this.setFilteredMovies} movies={this.state.movies} refresh={this.refreshState}/>
        </header>
        <Routes>
          <Route path="/" element={<Library movies={this.state.movies} displayMovie={this.displayMovie} foundMovies={this.state.foundMovies}/>}/>
          <Route path="/:movieId" element={<Page movie={this.state.singleMovie}
            trailer={this.state.trailer} overview={this.state.movieOverview} key={this.state.singleMovie.id} />}/>
        </Routes>
      </main>
    )
  }
}

export default App;
