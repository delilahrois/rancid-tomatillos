import { React, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Input.css'
// import Filter from './Filter';

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

  findMovie = () => {
    const foundMovie = this.props.movies.find((movie) => {
      return movie.title === this.state.searchInput || movie.title === this.state.searchInput.toLowerCase() || movie.title === this.state.searchInput.toUpperCase();
    })
    this.props.setMovie(foundMovie)
  }

  // filterMovie = (e) => { 
  //   const filteredMovies = this.props.movies.filter((movie) => {
  //     if(e.target.value === 'low') {
  //       return movie.rating < 5;
  //     } else if (e.target.value === 'mid') {
  //       return movie.rating >= 5 && movie.rating < 6;
  //     } else {
  //       return movie.rating > 6;
  //     }
  //   })
  //   this.props.setInputs(filteredMovies)
  // }

  render() {
    return (
      <div class="form-container">
        <form>
          <label for="searchInput"></label>
          <input class="input" id="searchInput" type="text" onChange={(e) => {this.setInput(e)}}></input>
          <button class="search-btn" onClick={() => {this.findMovie()}}>Search</button>
        </form>
        <form>
          <label for="ratingSelect"></label>
          <select class="input" id="ratingSelect" >
            <option>Rating</option>
            <option value="low">Low</option>
            <option value="average">Average</option>
            <option value="high">High</option>
          </select>
          <button onClick={(e) => {this.filterMovie(e)}}></button>
      </form>
      </div>
    )
  }
}

export default Input;