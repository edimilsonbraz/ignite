import ReactMarkdown from 'react-markdown'
import { PostProps } from '../..'
import { PostDetailContainer, PostDetailContent } from './styles'

export function PostDetail({ title, body }: PostProps) {
  return (
    <PostDetailContainer className="container">
      <PostDetailContent>
        <h3>{title}</h3>
        <div>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  )
}
