import { React, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Input.css'

class Input extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      rating: ''
    }
  }

  setInput = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  setRating = (e) => {
    this.setState({ rating: e.target.value })
  }

  findMovie = (e) => {
    e.preventDefault();
    if(this.state.searchInput) {
      const foundMovie = this.props.movies.find((movie) => {
        return movie.title.toLowerCase() === this.state.searchInput.toLowerCase();
      })
      this.props.setSingleMovie(foundMovie.id)
    } else {
      this.props.refresh();
    }
  }

  filterMovie = (e) => {
    e.preventDefault();
    if(this.state.rating) {
      const filteredMovies = this.props.movies.filter((movie) => {
        console.log(this.state.rating)
        if(this.state.rating === 'low') {
          return movie.average_rating < 5;
        } else if (this.state.rating === 'mid') {
          return movie.average_rating >= 5 && movie.average_rating < 6;
        } else {
          return movie.average_rating > 6;
        }
      })
      this.props.setFilteredMovies(filteredMovies)
    } else {
      this.props.refresh();
    }
  }

  render() {
    return (
      <div class="form-container">
        <form>
          <label for="searchInput"></label>
          <input class="input" id="searchInput" type="text" onChange={(e) => {this.setInput(e)}}></input>
          <button class="search-btn" onClick={(e) => {this.findMovie(e)}}>Search</button>
        </form>
        <form>
          <label for="ratingSelect"></label>
          <select class="input" id="ratingSelect" onChange={(e) => {this.setRating(e)}} >
            <option>Rating</option>
            <option value="low">Low</option>
            <option value="average">Average</option>
            <option value="high">High</option>
          </select>
          <button onClick={(e) => {this.filterMovie(e)}}>Filter</button>
      </form>
      </div>
    )
  }
}

export default Input;
