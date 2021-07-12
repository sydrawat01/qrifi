import { FC } from 'react'
import { Comment as CommentPropType } from '../../models/Comment'

interface CommentType {
  comment: CommentPropType
}

const Comment: FC<CommentType> = (props) => {
  return (
    <article className="comment">
      <h2>{props.comment.name}</h2>
      <h3>{props.comment.email}</h3>
      <p>{props.comment.body}</p>
    </article>
  )
}

export default Comment
