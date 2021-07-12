import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <section className="not-found">
      <h1>Not found 404 error!</h1>
      <Link to="/" className="button">
        Go back to Home
      </Link>
    </section>
  )
}

export default NotFound
