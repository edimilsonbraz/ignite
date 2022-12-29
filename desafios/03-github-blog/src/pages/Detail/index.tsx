import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { FiExternalLink } from 'react-icons/fi'
import { FaAngleLeft, FaCalendarDay, FaComment, FaGithub } from 'react-icons/fa'
import { PostDetail } from "./components/PostDetail";
import { FooterIcons, HeaderLinks, HeaderLinksIcons, PostInfoContainer } from './styles'
import { formattedDate } from '../../utils/formatter'



export interface PostProps {
  title: string
  html_url: string
  comments: string
  created_at: string
  user: { login: string }
  body: string
}

export function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<PostProps>({
    title: '',
    html_url: '',
    comments: '',
    created_at: '',
    user: { login: '' },
    body: ''
  })
  //Formatando data
  const publishedDateFormatted = formattedDate(post.created_at)
  
  useEffect(() => {
    getPost()
  }, [])

  async function getPost() {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/edimilsonbraz/ignite/issues/${id}`
      )
      setPost(response.data)
    } catch (error) {
      alert('Erro ao buscar post' + error)
    }
  }
  return (
    <>
      <PostInfoContainer className="container">
      <div>
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
            <FaComment />{post.comments} comentários
          </span>
        </FooterIcons>
      </div>
    </PostInfoContainer>

      <PostDetail {...post}/>
    </>
  )
}
