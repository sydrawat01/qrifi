import { FC } from 'react'
import { Link } from 'react-router-dom'
import Home from '../components/Home'

const HomePage: FC = () => (
  <div style={{ textAlign: 'center' }}>
    <Home />
    <Link to="/counter" className="button">
      Toolkit Example
    </Link>
  </div>
)

export default HomePage
