import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CounterState {
  counter?: number
}

const initialState: CounterState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment(state: CounterState) {
      state.counter! += 1
    },
    decrement(state: CounterState) {
      state.counter! -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

export const CounterSelector = (state: RootState) => state.counter.counter
