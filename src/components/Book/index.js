import {Component} from 'react'
import Header from '../Header'
import BookCard from '../BookCard'
import FailureView from '../FailureView'

import './index.css'

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
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = 'https://api.itbook.store/1.0/search/science'
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
          price: book.price,
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

        <div className="All-product-section">
          <ul className="books-list">
            {books.map(book => (
              <BookCard bookData={book} key={book.isbn13} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBooksList()
      case apiStatusConstants.failure:
        return <FailureView />
      case apiStatusConstants.inProgress:
        return 'Under progress'
      default:
        return null
    }
  }
}

export default Book
