import {MdLocalShipping} from 'react-icons/md'
import Header from '../Header'

import './index.css'

const ShippingAddress = () => (
  <>
    <Header />
    <div className="shipping-main-container">
      <div className="card-container-shipping">
        <img
          src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
          alt="title"
          className="shipping-image"
        />

        <div className="text-overlay">
          <MdLocalShipping className="icons-shipping" />
          <h1 className="text-title">Lorem Ipsum Delivery</h1>
          <p className="text-description">
            Everything at your doorstep. <br /> Fast and Reliable Shipping
            Services.
          </p>
        </div>
        <div className="delivery-info-container">
          <h1 className="delivery-text">DELIVERY INFO</h1>

          <div className="input-container">
            <input type="text" className="name" placeholder="First Name" />
            <input type="text" className="name" placeholder="Last Name" />
          </div>
          <div className="input-container">
            <input type="text" className="name" placeholder="Address" />
          </div>
          <div className="input-container">
            <input type="text" className="name" placeholder="State" />
            <input type="text" className="name" placeholder="City" />
          </div>
          <div className="input-container">
            <input type="text" className="name" placeholder="Zip" />
          </div>
          <div className="input-container">
            <input type="text" className="name" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="text" className="name" placeholder="Mobile No" />
          </div>
          <div className="input-container-button">
            <button type="button" className="save-button">
              Save
            </button>
            <button type="button" className="payment-button">
              Processed to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ShippingAddress
