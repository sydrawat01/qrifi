import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Post } from '../../../models/Post'
import { RootState } from '../../store'

interface postState {
  post: Post
  isLoading: boolean
  hasError: boolean
}
const initialState: postState = {
  post: {},
  isLoading: false,
  hasError: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPost(state: postState) {
      state.isLoading = true
    },
    getPostSuccess(state: postState, action) {
      state.isLoading = false
      state.hasError = false
      state.post = action.payload
    },
    getPostFailed(state: postState) {
      state.isLoading = false
      state.hasError = true
    },
  },
})

export default postSlice.reducer
export const { getPost, getPostFailed, getPostSuccess } = postSlice.actions
export const postSelector = (state: RootState) => state.post

export const fetchPost = (postId: number) => async (dispatch: Dispatch) => {
  dispatch(getPost())

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    if (!response.ok) throw new Error('something went wrong!')
    const data = await response.json()
    dispatch(getPostSuccess(data))
  } catch (err) {
    dispatch(getPostFailed())
  }
}
