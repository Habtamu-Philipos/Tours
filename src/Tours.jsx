import Tour from './Tour'

function Tours({ tours, setTours }) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours?.map((tour, index) => (
          <Tour key={tour.id} index={index} setTours={setTours} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default Tours
