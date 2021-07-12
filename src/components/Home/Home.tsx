import { FC } from 'react'

import ReactLogo from '../../assets/react-logo.svg'
import TSLogo from '../../assets/ts-logo.svg'
import ReduxLogo from '../../assets/redux-logo.svg'
import RouterLogo from '../../assets/router-logo.svg'

// import '../../styles/components/Home.scss'

const Home: FC = () => {
  return (
    <article className="home">
      <h1>{process.env.APP_TITLE}</h1>
      <div className="features">
        <a href={process.env.APP_REACT} target="_blank" rel="noreferrer">
          <img src={ReactLogo} className="react" alt="react" />
        </a>
        <a href={process.env.APP_TS} target="_blank" rel="noreferrer">
          <img src={TSLogo} alt="typescript" />
        </a>
        <a href={process.env.APP_REDUX} target="_blank" rel="noreferrer">
          <img src={ReduxLogo} alt="redux" />
        </a>
        <a href={process.env.APP_ROUTER} target="_blank" rel="noreferrer">
          <img src={RouterLogo} className="router" alt="react-router" />
        </a>
      </div>
    </article>
  )
}

export default Home
