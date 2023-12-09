import Slider from 'react-slick'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const imageData = [
  {
    id: uuidv4(),
    image: 'https://bookshelf-snowy.vercel.app/assets/images/hero.png',

    button: 'Shop now',
  },

  {
    id: uuidv4(),
    image: 'https://bookshelf-snowy.vercel.app/assets/images/hero3.png',

    button: 'Shop now',
  },

  {
    id: uuidv4(),
    image: 'https://bookshelf-snowy.vercel.app/assets/images/hero4.png',

    button: 'Shop now',
  },
]
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto-advance every 2 seconds
  }

  return (
    <>
      <Header />

      <Slider {...settings}>
        {imageData.map(item => (
          <div className="home-container" key={item.id}>
            <div className="text-container">
              <h1 className="heading">LETs MAKE THE BEST INVESTMENT</h1>
              <h3 className="heading1">
                There Is No Friend As <br />
                loyal As A Book
              </h3>

              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit Ad
                <br />
                harum quibusdam, assumenda quia explicabo
              </p>
              <button type="button" className="shop-now-button ">
                {item.button}
              </button>
            </div>
            <img
              src={item.image}
              alt={`carousel-item-${item.id}`}
              className="website-image"
            />
          </div>
        ))}
      </Slider>
      <div className="card-container">
        <div className="card-desing">
          <img
            src="https://bookshelf-snowy.vercel.app/assets/images/book1.jpg"
            alt="logo"
            className="image-card"
          />
          <div className="description">
            <h1 className="card-heading">SALE UP TO 15%</h1>
            <h2 className="card-heading1">
              Innovation in Education (Hardcover)
            </h2>
            <p className="card-paragraph">Starting at: $65.09</p>
          </div>
        </div>
        <div className="card-desing1">
          <img
            src="https://bookshelf-snowy.vercel.app/assets/images/book2.jpg"
            alt="logo"
            className="image-card"
          />
          <div className="description">
            <h1 className="card-heading">SALE UP TO 10%</h1>
            <h2 className="card-heading1">
              Innovation in Education (Hardcover)
            </h2>
            <p className="card-paragraph">Starting at: $50.09</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home