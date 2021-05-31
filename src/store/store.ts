import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/counter'
import ThemeReducer from './reducers/theme'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    theme: ThemeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
