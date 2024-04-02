import {Component} from 'react'
import Header from '../Header'
import BookCard from '../BookCard'
import FailureView from '../FailureView'
import SearchFilter from '../SearchFilter'
import Loader from '../LoaderComponent'
import './index.css'

const categoryOptions = [
  {
    name: 'Science',
    categoryId: '1',
  },
  {
    name: 'Math',
    categoryId: '2',
  },
  {
    name: 'SQL',
    categoryId: '3',
  },
  {
    name: 'JavaScript',
    categoryId: '4',
  },
  {
    name: 'Python',
    categoryId: '5',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Book extends Component {
  state = {
    books: [],
    apiStatus: apiStatusConstants.initial,
    selectedCategory: null,
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {selectedCategory} = this.state
    const apiUrl = `https://api.itbook.store/1.0/search/${
      selectedCategory || 'science'
    }`
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)

      if (response.ok) {
        const data = await response.json()
        const updatedData = data.books.map(book => ({
          title: book.title,
          author: book.author,
          subtitle: book.subtitle,
          price: parseFloat(book.price.replace('$', '')),
          url: book.url,
          image: book.image,
          isbn13: book.isbn13,
        }))

        this.setState({
          books: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 401) {
        throw new Error('Unauthorized')
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderBooksList = () => {
    const {books} = this.state

    return (
      <>
        <Header />
        <div className="book-filter-container-main-container">
          <div className="book-filter-design-container">
            <SearchFilter
              onSearch={this.handleSearch}
              categories={categoryOptions}
              onCategorySelect={this.handleCategorySelect}
            />
          </div>

          <div className="All-product-section-1">
            <h1 className="all-prodcut-heading">All products</h1>
            <ul className="books-list">
              {books.map(book => (
                <BookCard bookData={book} key={book.isbn13} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  handleSearch = async searchInput => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = `https://api.itbook.store/1.0/search/${searchInput}`
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)

      if (response.ok) {
        const data = await response.json()
        const updatedData = data.books.map(book => ({
          title: book.title,
          author: book.author,
          subtitle: book.subtitle,
          price: parseFloat(book.price.replace('$', '')),
          url: book.url,
          image: book.image,
          isbn13: book.isbn13,
        }))

        this.setState({
          books: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 401) {
        throw new Error('Unauthorized')
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleCategorySelect = async categoryId => {
    const selectedCategory = categoryOptions.find(
      category => category.categoryId === categoryId,
    )
    if (!selectedCategory) {
      console.error('Selected category not found')
      return
    }
    this.setState({
      selectedCategory: selectedCategory.name,
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = `https://api.itbook.store/1.0/search/${selectedCategory.name}`
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)
      console.log(response)

      if (response.ok) {
        const data = await response.json()
        const updatedData = data.books.map(book => ({
          title: book.title,
          author: book.author,
          subtitle: book.subtitle,
          price: parseFloat(book.price.replace('$', '')),
          url: book.url,
          image: book.image,
          isbn13: book.isbn13,
        }))

        this.setState({
          books: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 401) {
        throw new Error('Unauthorized')
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBooksList()
      case apiStatusConstants.failure:
        return <FailureView />
      case apiStatusConstants.inProgress:
        return <Loader />
      default:
        return null
    }
  }
}

export default Book
