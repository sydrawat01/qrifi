import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Post } from '../../../models/Post'
import { RootState } from '../../store'

interface postsState {
  posts: Post[]
  isLoading: boolean
  hasError: boolean
}

const initialState: postsState = {
  posts: [],
  isLoading: false,
  hasError: false,
}
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state: postsState) {
      state.isLoading = true
    },
    getPostsSuccess(state: postsState, action) {
      state.isLoading = false
      state.hasError = false
      state.posts = action.payload
    },
    getPostsFailed(state: postsState) {
      state.isLoading = false
      state.hasError = true
    },
  },
})

export default postsSlice.reducer
export const { getPosts, getPostsFailed, getPostsSuccess } = postsSlice.actions
export const postsSelector = (state: RootState) => state.posts

export const fetchPosts = () => async (dispatch: Dispatch) => {
  dispatch(getPosts())

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    if (!response.ok) throw new Error('something went wrong!')
    const data = await response.json()
    dispatch(getPostsSuccess(data))
  } catch (err) {
    dispatch(getPostsFailed())
  }
}
