import './index.css'

const BookCard = props => {
  const {bookData} = props
  const {title, subtitle, price, image} = bookData

  return (
    <li className="book-item">
      <img src={image} alt="book" className="thumbnail" />
      <div className="book-details">
        <h1 className="title">{title}</h1>
        <p className="author"> {subtitle}</p>

        <p className="isbn">USD: {price}</p>
      </div>
    </li>
  )
}

export default BookCard
