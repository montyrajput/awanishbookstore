import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-moblie-logo">
        <div className="logo-desing-moblie">
          <Link to="/">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.JmPlzQgZTTAxSj8Lemwy4AHaID&pid=Api&P=0&h=220"
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <h1 className="bookstore-heading">
            <Link to="/">Book Store</Link>
          </h1>
        </div>
        <button className="nav-mobile-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="nav-bar-img"
            alt="nav logout"
          />
        </button>
      </div>
      <div className="nav-content nav-bar-large-container ">
        <div className="logo-desing-moblie">
          <Link to="/">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.JmPlzQgZTTAxSj8Lemwy4AHaID&pid=Api&P=0&h=220"
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <h1 className="large-nav-heading">
            <Link to="/">BookStore</Link>
          </h1>
        </div>
        <div className="desing">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Book">Books</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/Book">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/Cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default withRouter(Header)
