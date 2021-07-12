import { FC } from 'react'
import { Link } from 'react-router-dom'

const AppHome: FC = () => {
  return (
    <section className="app">
      <h1>{process.env.MINI_APP_TITLE}</h1>
      <p>{process.env.MINI_APP_DESC}</p>
      <Link className="button" to="/app/posts">
        Go to Posts
      </Link>
    </section>
  )
}

export default AppHome
