import { React, Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    this.findMovie(this.state.searchInput)
  }

  setRating = (e) => {
    this.setState({ rating: e.target.value })
  }

  findMovie = () => {
    // e.preventDefault();
    if(this.state.searchInput) {
      document.getElementById('return-btn').classList.remove('hidden');
      const foundMovie = this.props.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase());
      })
      this.props.setFilteredMovies(foundMovie)
    } else {
      // this.props.refresh();
    }
  }

  // findMovie = () => {
  //   if(this.state.searchInput || this.state.rating) {
  //     document.getElementById('return-btn').classList.remove('hidden')
  //   }
  //   if(this.state.searchInput) {

  //     // 2 possible ways to do this.
  //       // 1. iterate through movie titles. split each title into separate words. then, split each word into letters, .toLowerCase() to check each letter as we type. 
  //       // simultaneously iterate through the state.searchInput.toLowerCase(). 
  //       // compare each index of the searchInput to the letters at each index of the movie titles to check if part of the movie actually BEGINS with those letters.

  //     // iterate through movie titles and filter to check if 

  //     const foundMovie = this.props.movies.filter((movie) => {
  //       const movieTitle = movie.title.split(' ')
  //       console.log(movieTitle)
  //       const acceptedMovie = movieTitle.filter((word) => {
  //         return word[0].includes(this.state.searchInput.toLowerCase())
  //       })
  //       return acceptedMovie
  //     })
  //     this.props.setFilteredMovies(foundMovie)
  //   } else {
  //     // this.props.refresh();
  //   }
  // }

  filterMovie = (e) => {
    e.preventDefault();
    if(this.state.searchInput || this.state.rating) {
      document.getElementById('return-btn').classList.remove('hidden')
    }
    if(this.state.rating) {
      const filteredMovies = this.props.movies.filter((movie) => {
        if(this.state.rating === 'low') {
          return movie.average_rating < 5;
        } else if (this.state.rating === 'average') {
          return movie.average_rating >= 5 && movie.average_rating < 6;
        } else {
          return movie.average_rating > 6;
        }
      })
      this.props.setFilteredMovies(filteredMovies)
    } else {
      // this.props.refresh();
    }
  }

  returnToMovies = () => {
    this.setState({ searchInput: '', rating: '' });
    this.props.componentDidMount();
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <label htmlFor="searchInput"></label>
          <input className="input" id="searchInput" type="text" onChange={(e) => {this.setInput(e)}}></input>
          <button className="search-btn" onClick={(e) => {this.findMovie(e)}}>Search</button>
        </form>
        <form>
          <label htmlFor="ratingSelect"></label>
          <select className="input" id="ratingSelect" onChange={(e) => {this.setRating(e)}} >
            <option>Rating</option>
            <option value="low">Low</option>
            <option value="average">Average</option>
            <option value="high">High</option>
          </select>
          <button onClick={(e) => {this.filterMovie(e)}}>Filter</button>
          <NavLink to={'/'} style={{ textDecoration: 'none' }} onClick={() => {this.returnToMovies()}}>
            <button className="return-btn hidden" id="return-btn">View all movies</button>
          </NavLink>
      </form>
      </div>
    )
  }
}

export default Input;
