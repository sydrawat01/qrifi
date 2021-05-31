import { FC } from 'react'
import { Link } from 'react-router-dom'
import Home from '../components/Home'

import './HomePage.scss'

const HomePage: FC = () => (
  <main className="homepage">
    <Home />
    <Link to="/counter" className="button">
      Toolkit Example
    </Link>
  </main>
)

export default HomePage
