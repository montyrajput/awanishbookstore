import {Link} from 'react-router-dom'

import './index.css'

const BookCard = props => {
  const {bookData} = props
  const {title, subtitle, price, image, isbn13} = bookData

  return (
    <li className="book-item">
      <Link to={`/Books/${isbn13}`} className="nav-item">
        <img src={image} alt="book" className="thumbnail" />
        <div className="book-details">
          <h1 className="title">{title}</h1>
          <p className="author"> {subtitle}</p>

          <p className="isbn">USD: {price}</p>
        </div>
      </Link>
    </li>
  )
}

export default BookCard
