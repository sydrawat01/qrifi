import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Comment } from '../../../models/Comment'
import { RootState } from '../../store'

interface commentsState {
  comments: Comment[]
  isLoading: boolean
  hasError: boolean
}

const initialState: commentsState = {
  comments: [],
  isLoading: false,
  hasError: false,
}
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments(state: commentsState) {
      state.isLoading = true
    },
    getCommentsSuccess(state: commentsState, action) {
      state.isLoading = false
      state.hasError = false
      state.comments = action.payload
    },
    getCommentsFailed(state: commentsState) {
      state.isLoading = false
      state.hasError = true
    },
  },
})

export default commentsSlice.reducer
export const { getComments, getCommentsFailed, getCommentsSuccess } =
  commentsSlice.actions
export const commentsSelector = (state: RootState) => state.comments

export const fetchComments = (postId: number) => async (dispatch: Dispatch) => {
  dispatch(getComments())
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    )
    if (!response.ok) throw new Error('something went wrong!')
    const data = await response.json()
    dispatch(getCommentsSuccess(data))
  } catch (err) {
    dispatch(getCommentsFailed())
  }
}
