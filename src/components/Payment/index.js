import {useContext, useState} from 'react'

import CartContext from '../../context/CartContext'
import CartListView from '../CartListView'

import Header from '../Header'

import './index.css'

const Payment = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')

  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const updatedPaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }

  const onPlaceOrder = () => setIsOrderPlaced(true)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  return (
    <div className="payment-container">
      {isOrderPlaced ? (
        <p className="success-message">your order successfull placed</p>
      ) : (
        <>
          <Header />

          <div className="payment-details-container">
            <div className="order-details-container">
              <h1 className="payment-heading">Order Summary</h1>
              <div className="order-display">
                <CartListView />
              </div>
              <div className="payment-quantity-container">
                <div className="price-container">
                  <p className="payment-price">
                    Price ({cartList.length} items)
                  </p>
                  <p className="payment-total-price">RS {getTotalPrice()}/-</p>
                </div>
                <div className="price-container">
                  <p className="payment-discount">Discount</p>
                  <p className="payment-discount-price">RS 00/-</p>
                </div>
                <div className="price-container">
                  <p className="payment-price">Delivery Charges</p>
                  <p className="payment-free-message">FREE Delivery</p>
                </div>
                <hr className="payment-horizontal-line" />
                <div className="total-amount-container">
                  <h1 className="payment-price payment-final-amount1">
                    Total Amount :{' '}
                  </h1>
                  <p className="payment-final-amount">
                    Rs: {getTotalPrice()}/-
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1>Payment Method</h1>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Payment
