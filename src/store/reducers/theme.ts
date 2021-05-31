import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ThemeState {
  theme: string | null
}
const initialState: ThemeState = {
  theme: localStorage.getItem('theme'),
}

const themeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    toggleTheme(state: ThemeState) {
      if (state.theme === 'dark') {
        localStorage.removeItem('theme')
        state.theme = 'light'
      } else {
        localStorage.setItem('theme', 'dark')
        state.theme = 'dark'
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
export const themeSelector = (state: RootState) => state.theme.theme
