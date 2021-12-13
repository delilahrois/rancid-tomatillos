import { React, Component } from 'react';
import './Input.css'

class Input extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      rating: 'rating'
    }
  }

  setInput = async (e) => {
    await this.setState({ searchInput: e.target.value })
    this.findMovie(this.state.searchInput)
    if(this.state.searchInput === '') {
      this.props.refresh()
    }
  }

  setRating = async (e) => {
    await this.setState({ rating: e.target.value })
    this.filterMovie(this.state.rating)
    if(this.state.rating === 'rating') {
      this.props.refresh()
    }
  }

  findMovie = () => {
    if(this.state.searchInput) {
      const foundMovie = this.props.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase());
      })
      this.props.setFilteredMovies(foundMovie)
    }
  }

  filterMovie = () => {
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
          <input className="input" id="searchInput" type="text" placeholder="Search movies..." onChange={(e) => {this.setInput(e)}}></input>
        </form>
        <form>
          <label htmlFor="ratingSelect"></label>
          <select className="input" id="ratingSelect" style={{color: this.state.rating === 'rating' ? 'grey' : 'black'}} onChange={(e) => {this.setRating(e)}} >
            <option value="rating">Rating</option>
            <option value="low">Low</option>
            <option value="average">Average</option>
            <option value="high">High</option>
          </select>
      </form>
      </div>
    )
  }
}

export default Input;

