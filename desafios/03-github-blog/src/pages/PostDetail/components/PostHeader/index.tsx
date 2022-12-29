import { useNavigate } from 'react-router-dom'
import { formattedDate } from '../../../../utils/formatter'
import { IssuesProps } from '../../../Blog'

import { FiExternalLink } from 'react-icons/fi'
import { FaAngleLeft, FaCalendarDay, FaComment, FaGithub } from 'react-icons/fa'
import {
  FooterIcons,
  HeaderLinks,
  HeaderLinksIcons,
  PostHeaderContainer,
} from './styles'

interface PostHeaderProps {
  post: IssuesProps
  isLoading: boolean
}

export function PostHeader({isLoading, post }: PostHeaderProps) {
  const navigate = useNavigate()

  //Formatando data
  const publishedDateFormatted = formattedDate(post.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <div>
          <h1>Carregando...</h1>
        </div>
      ) : (
        <>
          <HeaderLinks>
            <HeaderLinksIcons onClick={() => navigate(-1)}>
              <FaAngleLeft size="24" />
              <span>Voltar</span>
            </HeaderLinksIcons>

            <HeaderLinksIcons href={post.html_url} target="_blank">
              <span>Ver no Github</span>
              <FiExternalLink size="18" />
            </HeaderLinksIcons>
          </HeaderLinks>

          <h1>{post.title}</h1>

          <FooterIcons>
            <span>
              <FaGithub />
              {post.user.login}
            </span>
            <span>
              <FaCalendarDay />
              {publishedDateFormatted}
            </span>
            <span>
              <FaComment />
              {post.comments} comentários
            </span>
          </FooterIcons>          
        </>
      )}
    </PostHeaderContainer>
  )
}
