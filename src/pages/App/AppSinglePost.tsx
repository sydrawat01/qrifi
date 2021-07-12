import { FC, useEffect } from 'react'
import { match } from 'react-router'
import Comment from '../../components/App/Comment'
import Post from '../../components/App/Post'
import { useAppDispatch, useAppSelector } from '../../store/hooks/basicHooks'
import {
  commentsSelector,
  fetchComments,
} from '../../store/reducers/slices/comments-slice'
import { fetchPost, postSelector } from '../../store/reducers/slices/post-slice'

const AppSinglePost: FC<{ match: match }> = ({ match }) => {
  const dispatch = useAppDispatch()
  const {
    post,
    isLoading: postIsLoading,
    hasError: postHasError,
  } = useAppSelector(postSelector)
  const {
    comments,
    isLoading: commentsAreLoading,
    hasError: commentsHaveError,
  } = useAppSelector(commentsSelector)

  const postId = Object.values<number>(match.params)[0]
  useEffect(() => {
    dispatch(fetchPost(postId))
    dispatch(fetchComments(postId))
  }, [dispatch, postId])

  const renderPost = () => {
    if (postIsLoading) return <p>Loading post...</p>
    if (postHasError) return <p>Oops! Cannot load post!</p>

    return <Post post={post} excerpt={false} />
  }

  const renderComments = () => {
    if (commentsAreLoading) return <p>Loading comments...</p>
    if (commentsHaveError) return <p>Oops! Cannot load comments!</p>

    return comments.map((item) => <Comment key={item.id} comment={item} />)
  }

  return (
    <section className="app">
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  )
}

export default AppSinglePost
