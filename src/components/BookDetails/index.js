import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'

import FailureView from '../FailureView'
import Loader from '../LoaderComponent'
import CartContext from '../../context/CartContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS', // Corrected typo in 'inProgress'
}

class BookDetails extends Component {
  state = {
    BookData: {},
    apiStatus: apiStatusConstants.initial,
    quantity: 1,
  }

  componentDidMount() {
    this.getBookData()
  }

  getBookData = async () => {
    const {match} = this.props
    const {params} = match
    const {isbn13} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = `https://api.itbook.store/1.0/books/${isbn13}`
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)
      console.log(response)

      if (response.ok) {
        const fetchData = await response.json()
        const bookData = {
          title: fetchData.title,
          subtitle: fetchData.subtitle,
          price: Math.round(parseFloat(fetchData.price.replace('$', '')) + 200),
          url: fetchData.url,
          image: fetchData.image,
          id: fetchData.isbn13,
          authors: fetchData.authors,
          publisher: fetchData.publisher,
          pages: fetchData.pages,
          year: fetch.year,
          rating: fetchData.rating,
          description: fetchData.desc,
        }

        this.setState({
          BookData: bookData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 404) {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onDecrement = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderBookDetailView = () => (
    <CartContext.Consumer>
      {value => {
        const {BookData, quantity} = this.state
        const {
          title,
          price,
          image,
          authors,
          publisher,
          year,
          rating,
          description,
        } = BookData

        const {addCartItem} = value
        const onClickAddToCart = () => {
          addCartItem({...BookData, quantity})
        }

        return (
          <div className="book-item-details-container">
            <img src={image} alt={title} className="book-image" />
            <div className="text-container">
              <h1 className="book-title">{title}</h1>
              <p className="book-price">INR: {price}</p>
              <div className="rating-view-container">
                <div className="rating-container">
                  <p className="rating">{rating}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    alt="star"
                    className="star"
                  />
                </div>
                <p className="book-year">{year}</p>
              </div>
              <p className="description">{description}</p>
              <div className="label-value-container">
                <p className="label">Authors:</p>
                <p className="value">{authors}</p>
              </div>
              <div className="label-value-container">
                <p className="label">Publisher::</p>
                <p className="value">{publisher}</p>
              </div>
              <hr className="horizontal-line" />
              <div className="quantity-container">
                <button
                  type="button"
                  aria-label="Save"
                  className="quantity-controller-button"
                  onClick={this.onDecrement}
                  data-testid="minus"
                >
                  <BsDashSquare className="quantity-controller-icon" />
                </button>
                <p className="quantity">{quantity}</p>
                <button
                  type="button"
                  aria-label="Save"
                  className="quantity-controller-button"
                  onClick={this.onIncrement}
                  data-testid="plus"
                >
                  <BsPlusSquare className="quantity-controller-icon" />
                </button>
              </div>
              <button
                type="button"
                className="button add-to-cart-btn"
                onClick={onClickAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  renderBookDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBookDetailView()
      case apiStatusConstants.failure:
        return <FailureView />
      case apiStatusConstants.inProgress:
        return <Loader />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="book-details-main-container">
          {this.renderBookDetails()}
        </div>
      </>
    )
  }
}

export default BookDetails
