import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import './index.css'

class SearchFilter extends Component {
  state = {
    searchInput: '',
  }

  handleInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  handleSearch = () => {
    const {onSearch} = this.props
    const {searchInput} = this.state
    onSearch(searchInput)
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="search-input-main-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            value={searchInput}
            className="search-input"
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleSearch}
            type="button"
            aria-label="Search"
            className="search-button"
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
      </div>
    )
  }
}

export default SearchFilter
