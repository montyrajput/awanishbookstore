import {useContext, useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import CartContext from '../../context/CartContext'
import CartListView from '../CartListView'
import Upi from '../../images/upi-icon.png'
import PhonePe from '../../images/Phonepay2.png'
import GooglePay from '../../images/Gpay.png'
import Paytm from '../../images/Paytm_Logo.png'

import Header from '../Header'

import './index.css'

const paymentOptionsList = [
  {
    id: 'PHONEPE',
    displayText: 'PhonePe',
    image: PhonePe,
    isDisabled: false,
  },
  {
    id: 'GOOGLE PAY',
    displayText: 'Google Pay',
    image: GooglePay,
    isDisabled: false,
  },
  {
    id: 'PAYTM',
    displayText: 'Paytm',
    image: Paytm,
    isDisabled: false,
  },
]

const Payment = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')

  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)

  const updatedPaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }

  const onPlaceOrder = () => setIsOrderPlaced(true)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const handleArrowClick = () => {
    setShowPaymentOptions(!showPaymentOptions)
  }

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
              <h1 className="payment-heading1">Payment Method</h1>
              <div className="payment-option-main-container-upi">
                <div className="payment-option-container">
                  <img src={Upi} alt="text" className="payment-images-upi" />
                  <div>
                    <h1 className="payment-upi-heading">
                      UPI <br />
                      <span className="payment-option-paragraph">
                        Pay by any UPI app
                      </span>
                    </h1>
                  </div>
                </div>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={handleArrowClick}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleArrowClick()
                    }
                  }}
                  aria-label="Toggle Payment Options"
                >
                  <IoIosArrowDown className="payment-option-react-icon1" />
                </span>
              </div>
              {showPaymentOptions && (
                <div className="payment-option-card-list">
                  {paymentOptionsList.map(eachMethod => (
                    <div className="payment-input-option-main-container">
                      <div key={eachMethod.id} className="payment-input-option">
                        <input
                          id={eachMethod.id}
                          type="radio"
                          name="paymentMethod"
                          disabled={eachMethod.isDisabled}
                          onChange={updatedPaymentMethod}
                          className="payment-method-input1"
                        />
                        <label
                          className={`payment-method-label ${
                            eachMethod.isDisabled ? 'disabled-label' : ''
                          }`}
                          htmlFor={eachMethod.id}
                        >
                          <p className="payment-option-displaytext">
                            {eachMethod.displayText}
                          </p>
                        </label>
                      </div>
                      <div>
                        {eachMethod.image && (
                          <img
                            src={eachMethod.image}
                            alt={`${eachMethod.displayText} icon`}
                            className="payment-method-image1"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Payment
