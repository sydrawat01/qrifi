import { FC, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks/basicHooks'
import { themeSelector, toggleTheme } from '../store/reducers/theme'

import { NavLink } from 'react-router-dom'

import Sun from '../assets/light.svg'
import Moon from '../assets/dark.svg'

const Layout: FC = (props) => {
  const theme = useAppSelector(themeSelector)
  const dispatch = useAppDispatch()
  const themeChangeHandler = () => {
    dispatch(toggleTheme())
  }
  const [scrolled, setScrolled] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 45) setScrolled(true)
    else setScrolled(false)
  }

  const themeClass = theme === 'dark' ? 'dark' : 'light'
  const btnImg =
    theme === 'dark' ? (
      <img src={Moon} alt="dark-mode" className="moon" />
    ) : (
      <img src={Sun} alt="light-mode" className="sun" />
    )
  return (
    <>
      <div className={`${themeClass}`}>
        <nav className={scrolled ? 'sticky' : undefined}>
          <section className="navigation">
            <NavLink to="/" exact className="navlinks" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/counter"
              exact
              className="navlinks"
              activeClassName="active"
            >
              Counter
            </NavLink>
            <NavLink to="/app" className="navlinks" activeClassName="active">
              Mini App
            </NavLink>
          </section>
          <section className="control">
            <button onClick={themeChangeHandler} className="theme-toggle">
              {btnImg}
            </button>
          </section>
        </nav>
        {props.children}
      </div>
      <footer>
        <h2>
          Made with{' '}
          <span role="img" aria-label="heart-emoji">
            ♥️
          </span>{' '}
          by{' '}
          <strong>
            <a
              href="https://github.com/sydrawat"
              target="_blank"
              rel="noreferrer"
            >
              sydrawat
            </a>
          </strong>{' '}
          &copy; 2021
        </h2>
      </footer>
    </>
  )
}

export default Layout
