import { FaAngleLeft, FaCalendarDay, FaComment, FaGithub, FaUserFriends } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { FooterIcons, HeaderLinks, HeaderLinksIcons, PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer className="container">
      <div>
        <HeaderLinks>
          <HeaderLinksIcons href="">
            <FaAngleLeft size='24' />
            <span>Voltar</span>
          </HeaderLinksIcons>

          <HeaderLinksIcons href="">
            <span>Ver no Github</span>
            <FiExternalLink size='18' />
          </HeaderLinksIcons>
        </HeaderLinks>

        <h1>JavaScript data types and data structures</h1>

        <FooterIcons>
          <span>
            <FaGithub />
            edimilsonbraz
          </span>
          <span>
            <FaCalendarDay />
            Há 1 dia
          </span>
          <span>
            <FaComment />
            5 comentários
          </span>
        </FooterIcons>
      </div>
    </PostInfoContainer>
  )
}
