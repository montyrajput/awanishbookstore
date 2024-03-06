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

  handleCategorySelect = categoryId => {
    // Pass the selected category ID to the parent component
    const {onCategorySelect} = this.props
    onCategorySelect(categoryId)
  }

  render() {
    const {searchInput} = this.state
    const {categories} = this.props

    return (
      <>
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
        <div className="search-filter-catorgies-container">
          <h1 className="category-heading">Category</h1>
          <ul className="search-filter-catgory-list">
            {categories.map(category => (
              <li
                key={category.categoryId}
                className="search-filter-category-list"
              >
                <button
                  type="button"
                  onClick={() => this.handleCategorySelect(category.categoryId)}
                  className="search-filter-category-button"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default SearchFilter
