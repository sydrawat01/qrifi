import { FC } from 'react'
import { Link } from 'react-router-dom'

// import '../styles/pages/HomePage.scss'

import Home from '../components/Home/Home'

const HomePage: FC = () => {
  return (
    <section className="homepage">
      <Home />
      <div className="links">
        <Link to="/counter" className="button">
          Toolkit Example
        </Link>
        <Link to="/app" className="button">
          Redux Thunk Example
        </Link>
      </div>
    </section>
  )
}

export default HomePage
