import { FC } from 'react'

import ReactLogo from '../assets/react-logo.svg'
import TSLogo from '../assets/ts-logo.svg'
import ReduxLogo from '../assets/redux-logo.svg'
import RouterLogo from '../assets/router-logo.svg'

import classes from './Home.module.css'

const Home: FC = () => {
  return (
    <div className={classes.Home}>
      <header className={classes['Home-header']}>
        <h1>{process.env.APP_TITLE}</h1>
        <div className={classes.Features}>
          <a href={process.env.APP_REACT} target="_blank" rel="noreferrer">
            <img
              src={ReactLogo}
              className={classes['React-logo']}
              alt="react"
            />
          </a>
          <a href={process.env.APP_TS} target="_blank" rel="noreferrer">
            <img
              src={TSLogo}
              className={classes['Tools-logo']}
              alt="typescript"
            />
          </a>
          <a href={process.env.APP_REDUX} target="_blank" rel="noreferrer">
            <img
              src={ReduxLogo}
              className={classes['Tools-logo']}
              alt="redux"
            />
          </a>
          <a href={process.env.APP_ROUTER} target="_blank" rel="noreferrer">
            <img
              src={RouterLogo}
              className={classes['Router-logo']}
              alt="react-router"
            />
          </a>
        </div>
      </header>
    </div>
  )
}

export default Home
