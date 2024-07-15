import { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [tours, setTours] = useState([])

  useEffect(() => {
    async function fetchData(link) {
      setIsLoading(true)
      try {
        const res = await fetch(link)
        const data = await res.json()
        setTours(data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

    fetchData(url)
  }, [])
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left </h2>
          <button
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={() => fetchData()}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} />
    </main>
  )
}
export default App
