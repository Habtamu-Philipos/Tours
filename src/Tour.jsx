import { useState } from 'react'

function Tour({ tour, index, setTours }) {
  const { id, name, info, image, price } = tour
  const [showMore, setShowMore] = useState(false)

  function removeTour(index) {
    setTours((prevItems) => prevItems.filter((item, i) => i !== index))
  }

  function toggleShowMore() {
    setShowMore((prevShowMore) => !prevShowMore)
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showMore ? info : `${info.slice(0, 150)}`}
          <button type="button" onClick={toggleShowMore} className="info-btn">
            {showMore ? 'seeless' : 'seemore'}
          </button>
        </p>
        <button
          onClick={() => removeTour(index)}
          type="button"
          className="btn btn-block delete-btn"
        >
          Not Interested
        </button>
      </div>
    </article>
  )
}

export default Tour
