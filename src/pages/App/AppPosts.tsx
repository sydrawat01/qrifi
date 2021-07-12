import { FC, useEffect } from 'react'
import Post from '../../components/App/Post'
import { useAppDispatch, useAppSelector } from '../../store/hooks/basicHooks'
import {
  fetchPosts,
  postsSelector,
} from '../../store/reducers/slices/posts-slice'

const AppPosts: FC = () => {
  const dispatch = useAppDispatch()
  const { posts, isLoading, hasError } = useAppSelector(postsSelector)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (isLoading) return <p>Loading posts...</p>
    if (hasError) return <p>Oops! Cannot load posts!</p>

    return posts.map((post) => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <section className="app">
      <h1>List of Posts</h1>
      {renderPosts()}
    </section>
  )
}

export default AppPosts
