import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'

import FailureView from '../FailureView'
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
          price: fetchData.price,
          url: fetchData.url,
          image: fetchData.image,
          id: fetchData.isbn13,
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
        const {title, subtitle, price, image} = BookData

        const {addCartItem} = value
        const onClickAddToCart = () => {
          addCartItem({...BookData, quantity})
        }

        return (
          <div className="Book-item-container">
            <img src={image} alt={title} />
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
              <p>{price}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={this.onDecrement}
                aria-label="Decrease quantity"
              >
                <BsPlusSquare />
              </button>
              <p className="quantity">{quantity}</p>
              <button
                type="button"
                onClick={this.onIncrement}
                aria-label="Increase quantity"
              >
                <BsDashSquare />
              </button>
            </div>
            <div>
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
        return 'progress'
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div>{this.renderBookDetails()}</div>
      </>
    )
  }
}

export default BookDetails
