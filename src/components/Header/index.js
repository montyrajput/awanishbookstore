import {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Order from '../../images/order.png'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = () => {
  const [username, setUsername] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge1">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
      setIsSignedUp(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('username', username)
  }, [username])

  const handleSelectChange = e => {
    const selectedOption = e.target.value

    if (selectedOption === 'signup') {
      window.location.href = '/signup'
    } else if (selectedOption === 'signin') {
      window.location.href = '/signin'
    } else if (selectedOption === 'logout') {
      setUsername('')
      setIsSignedUp(false)
    }
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-moblie-logo">
          <div className="logo-desing-moblie">
            <Link to="/" className="nav-link">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.JmPlzQgZTTAxSj8Lemwy4AHaID&pid=Api&P=0&h=220"
                className="website-logo"
                alt="website logo"
              />
            </Link>
            <h1 className="bookstore-heading">
              <Link to="/" className="nav-link">
                Book Store
              </Link>
            </h1>
          </div>
          <select
            className="nav-username-signup-container "
            onChange={handleSelectChange}
            value={isSignedUp ? 'UserName' : 'signup'}
          >
            {isSignedUp && (
              <option value="UserName" className="select-sign-up">
                Username: {username}
              </option>
            )}
            <option value="signup" className="select-sign-up">
              Sign up
            </option>
            <option value="signin" className="select-sign-up">
              Sign In
            </option>
            <option value="signin" className="select-sign-up">
              Logout
            </option>
          </select>
        </div>
        <div className="nav-content nav-bar-large-container ">
          <div className="logo-desing-moblie">
            <Link to="/" className="nav-link">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.JmPlzQgZTTAxSj8Lemwy4AHaID&pid=Api&P=0&h=220"
                className="website-logo"
                alt="website logo"
              />
            </Link>
            <h1 className="large-nav-heading">
              <Link to="/" className="nav-link">
                BookStore
              </Link>
            </h1>
          </div>
          <div className="desing">
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/Book" className="nav-link">
                  Books
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/Cart" className="nav-link">
                  Cart
                  {renderCartItemsCount()}
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/Order" className="nav-link">
                  Order
                </Link>
              </li>
            </ul>

            <select
              className="nav-username-signup-container"
              onChange={handleSelectChange}
              value={isSignedUp ? 'UserName' : 'signup'}
            >
              {isSignedUp && (
                <option value="UserName" className="select-sign-up">
                  Username: {username}
                </option>
              )}
              <option value="signup" className="select-sign-up">
                Sign up
              </option>
              <option value="signin" className="select-sign-up">
                Sign In
              </option>
              <option value="signin" className="select-sign-up">
                Logout
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/Book" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/Cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/Order" className="nav-link">
              <img src={Order} alt="nav products" className="nav-bar-img" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
