import {useContext, useState, useEffect} from 'react'
import Header from '../Header'
import RatingStar from '../../images/RatingStar.png'
import QuestionMark from '../../images/question mark.png'
import NoOrder from '../../images/noorder2.jpg'
import Loader from '../LoaderComponent'
import CartContext from '../../context/CartContext'
import './index.css'

const Order = () => {
  const {cartList} = useContext(CartContext)
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cartList.length > 0) {
        const dummyOrder = {
          items: cartList,
        }
        setOrderDetails(dummyOrder)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [cartList])

  return (
    <>
      <Header />
      <h1 className="order-item-heading">Order Details : </h1>
      <div>
        {orderDetails ? (
          orderDetails.items.map(item => (
            <div key={item.id}>
              {' '}
              {/* Correct placement of key prop */}
              <div className="order-item-main-container">
                <div className="order-item-card-container">
                  <div className="order-item-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="order-item-image"
                    />
                    <div>
                      <h2 className="order-item-title">{item.title}</h2>
                      <p className="order-item-authors">{item.authors}</p>
                      <p className="order-item-authors">{item.quantity}</p>
                    </div>
                  </div>
                  <p className="order-items-price">
                    {item.price * item.quantity}
                  </p>
                </div>
              </div>
              <div className="order-item-main-container1">
                <div className="progress-track">
                  <ul id="progressbar">
                    <li className="step0 active" id="step1">
                      Ordered
                    </li>
                    <li className="step0 active text-center" id="step2">
                      Shipped
                    </li>
                    <li className="step0 active text-right" id="step3">
                      On the way
                    </li>
                    <li className="step0 text-right" id="step4">
                      Delivered
                    </li>
                  </ul>
                </div>
                <div className="order-rating-item-container">
                  <h1 className="order-item-return-heading">
                    10 Days Return Policy
                  </h1>
                  <div>
                    <div className="order-rating-container">
                      <img
                        src={RatingStar}
                        alt="order-rating-star"
                        className="order-rating-image"
                      />
                      <p className="order-item-rating-paragraph">
                        Rate & Review Product
                      </p>
                    </div>
                    <div className="order-rating-container">
                      <img
                        src={QuestionMark}
                        alt="question-mark"
                        className="order-QuestionMark-image"
                      />
                      <p className="order-item-need-help-paragraph">
                        Need Help ?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>
            {cartList.length > 0 ? (
              <Loader />
            ) : (
              <div className="No-order-container">
                <img src={NoOrder} alt="No-Order" className="no-order-images" />
              </div>
            )}
          </p>
        )}
      </div>
    </>
  )
}

export default Order
