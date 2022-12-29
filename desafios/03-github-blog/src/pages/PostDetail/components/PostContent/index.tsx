import ReactMarkdown from 'react-markdown'
import { IssuesProps } from '../../../Blog';
import { PostBodyContainer } from "./styles";

interface PostBodyProps {
  post: IssuesProps
}

export function PostConten({ post} : PostBodyProps) {
  return (
    <PostBodyContainer>
      <h3>{post.title}</h3>
      <div>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </PostBodyContainer>
  )
}

