import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )
      return (
        <div className="cart-summary-container">
          <div className="cart-summary-card">
            <h1 className="cart-items-total-price">
              Order Total: <span>INR: {totalPrice}/-</span>
            </h1>
            <p className="cart-items-count">{items} Items in cart</p>
            <Link to="/shipping">
              <button className="checkout-btn" type="button">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
