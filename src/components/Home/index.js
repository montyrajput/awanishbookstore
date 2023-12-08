import Slider from 'react-slick'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const imageData = [
  {
    id: uuidv4(),
    image: 'https://bookshelf-snowy.vercel.app/assets/images/hero3.png',
    heading: 'LET MAKE THE BEST INVESTMENT',
    headings: 'There Is No Friend As',
    headingss: 'loyal As A Book',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ad harum quibusdam, assumenda quia explicabo',
    button: 'Shop now',
  },

  {
    id: uuidv4(),
    image: 'https://bookshelf-snowy.vercel.app/assets/images/hero3.png',
    heading: 'LET MAKE THE BEST INVESTMENT',
    headings: 'There Is No Friend As',
    headingss: 'loyal As A Book',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ad harum quibusdam, assumenda quia explicabo',
    button: 'Shop now',
  },

  {
    id: uuidv4(),
    image: 'https://bookshelf-snowy.vercel.app/assets/images/hero3.png',
    heading: 'LET MAKE THE BEST INVESTMENT',
    headings: 'There Is No Friend As',
    headingss: 'loyal As A Book',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ad harum quibusdam, assumenda quia explicabo',
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
              <h1 className="heading">{item.heading}</h1>
              <h3>{item.headings}</h3>
              <h2>{item.headingss}</h2>
              <p>{item.paragraph}</p>
              <button type="button">{item.button}</button>
            </div>
            <img
              src={item.image}
              alt={`carousel-item-${item.id}`}
              className="website-image"
            />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Home
