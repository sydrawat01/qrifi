import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks/basicHooks'
import { themeSelector, toggleTheme } from '../store/reducers/theme'

import Sun from '../assets/light.svg'
import Moon from '../assets/dark.svg'

import './Layout.scss'

const Layout: FC = (props) => {
  const theme = useAppSelector(themeSelector)
  const dispatch = useAppDispatch()
  const themeChangeHandler = () => {
    dispatch(toggleTheme())
  }
  const themeClass = theme === 'dark' ? 'layout-dark' : 'layout-light'
  const btnImg =
    theme === 'dark' ? (
      <img src={Moon} alt="dark-mode" className="moon" />
    ) : (
      <img src={Sun} alt="light-mode" className="sun" />
    )
  return (
    <div className={`layout ${themeClass}`}>
      <div className="control">
        <button onClick={themeChangeHandler} className="theme-toggle">
          {btnImg}
        </button>
      </div>
      {props.children}
    </div>
  )
}

export default Layout
