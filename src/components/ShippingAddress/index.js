import {useState, useEffect} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'
import {MdLocalShipping} from 'react-icons/md'
import Header from '../Header'
import './index.css'

const ShippingAddress = () => {
  const [detailsList, setDetailsList] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [showError, setShowError] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const savedDetails = localStorage.getItem('shippingDetails')
    if (savedDetails) {
      setDetailsList(JSON.parse(savedDetails))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('shippingDetails', JSON.stringify(detailsList))
  }, [detailsList])

  const handleSave = () => {
    if (
      firstName &&
      lastName &&
      address &&
      state &&
      city &&
      zip &&
      email &&
      mobile
    ) {
      if (
        !firstName.trim() ||
        !lastName.trim() ||
        !address.trim() ||
        !state.trim() ||
        !city.trim() ||
        !zip.trim() ||
        !email.trim() ||
        !mobile.trim()
      ) {
        setShowError(true)
        return
      }

      if (
        detailsList.some(
          details =>
            details.firstName === firstName &&
            details.lastName === lastName &&
            details.address === address &&
            details.state === state &&
            details.city === city &&
            details.zip === zip &&
            details.email === email &&
            details.mobile === mobile,
        )
      ) {
        setShowError(true)
        return
      }

      const newDetails = {
        id: uuidv4(),
        firstName,
        lastName,
        address,
        state,
        city,
        zip,
        email,
        mobile,
      }

      setDetailsList([...detailsList, newDetails])

      setFirstName('')
      setLastName('')
      setAddress('')
      setState('')
      setCity('')
      setZip('')
      setEmail('')
      setMobile('')
      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  const handleDelete = id => {
    setDetailsList(detailsList.filter(details => details.id !== id))
  }

  const handleCheckboxChange = id => {
    setSelectedDetail(id)
    setIsChecked(true)
  }

  return (
    <>
      <Header />
      <div className="shipping-main-container">
        <div className="card-container-shipping">
          <div className="shipping-image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
              alt="title"
              className="shipping-image"
            />

            <div className="text-overlay">
              <MdLocalShipping className="icons-shipping" />
              <h1 className="text-title">Lorem Ipsum Delivery</h1>
              <p className="text-description">
                Everything at your doorstep. Fast and Reliable Shipping
                Services.
              </p>
            </div>
          </div>

          <div className="delivery-info-container">
            <h1 className="delivery-text">DELIVERY INFO</h1>

            {showError ? (
              <p style={{color: 'red'}}>Please fill in all details.</p>
            ) : (
              !showError && (
                <div className="shipping-details-container">
                  {detailsList.map((details, index) => (
                    <div key={details.id} className="shipping-store-container">
                      <div className="shipping-checkbox-container">
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(details.id)}
                          checked={selectedDetail === details.id}
                          className="input-shipping-checkbox"
                        />
                        <h1 className="shpping-details-checkbox-details">
                          Shipping Details : {index + 1}
                        </h1>
                      </div>
                      <h3 className="shipping-store-details-name">
                        Name:{' '}
                        <span className="shipping-store-details-name-details">
                          {details.firstName} {details.lastName}
                        </span>
                      </h3>
                      <h3 className="shipping-store-details-name">
                        Address:{' '}
                        <span className="shipping-store-details-name-details">
                          {details.address}
                        </span>
                      </h3>
                      <p className="shipping-store-details-state">
                        {details.city}, {details.state},
                        <span className="shipping-store-details-zipcode">
                          {details.zip}
                        </span>
                      </p>
                      <h3 className="shipping-store-details-name">
                        Email:{' '}
                        <span className="shipping-store-details-name-details">
                          {details.email}
                        </span>
                      </h3>
                      <h3 className="shipping-store-details-name">
                        Mobile:{' '}
                        <span className="shipping-store-details-name-details">
                          {details.mobile}
                        </span>
                      </h3>
                      <button
                        type="button"
                        aria-label="delete"
                        onClick={() => handleDelete(details.id)}
                        className="shipping-store-details-button"
                      >
                        <RiDeleteBin6Line size={25} color="#616E7C" />
                      </button>
                    </div>
                  ))}
                </div>
              )
            )}

            <div className="input-container">
              <input
                type="text"
                className="name"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="name"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="name"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div>
              <div className="input-container">
                <input
                  type="text"
                  className="name"
                  placeholder="State"
                  value={state}
                  onChange={e => setState(e.target.value)}
                />
                <input
                  type="text"
                  className="name"
                  placeholder="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="name"
                  placeholder="Zip"
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="name"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="name"
                  placeholder="Mobile No"
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                />
              </div>

              <div className="input-container-button">
                <button
                  type="button"
                  className="save-button"
                  onClick={handleSave}
                >
                  Save
                </button>

                <Link
                  to={{
                    pathname: '/payment',
                    state: {selectedDetail, detailsList},
                  }}
                >
                  <button
                    type="button"
                    className="payment-button"
                    disabled={!isChecked || detailsList.length === 0}
                  >
                    Proceed to payments
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShippingAddress
