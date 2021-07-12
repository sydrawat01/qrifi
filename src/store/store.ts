import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/counter'
import ThemeReducer from './reducers/theme'

import PostsSlice from './reducers/slices/posts-slice'
import PostSlice from './reducers/slices/post-slice'
import CommentsSlice from './reducers/slices/comments-slice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    theme: ThemeReducer,
    posts: PostsSlice,
    post: PostSlice,
    comments: CommentsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
