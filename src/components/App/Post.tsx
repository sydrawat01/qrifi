import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Post as PostPropType } from '../../models/Post'

interface PostType {
  post: PostPropType
  excerpt: boolean
}
const Post: FC<PostType> = (props) => {
  return (
    <article className={props.excerpt ? 'post-excerpt' : 'post'}>
      <h2>{props.post.title}</h2>
      <p>
        {props.excerpt
          ? props.post.body?.substring(0, 100).concat('...')
          : props.post.body}
      </p>
      {props.excerpt && (
        <Link className="button" to={`/app/posts/${props.post.id}`}>
          View Post
        </Link>
      )}
    </article>
  )
}

export default Post
