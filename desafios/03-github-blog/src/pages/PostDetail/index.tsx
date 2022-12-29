import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { PostHeader } from './components/PostHeader'
import { IssuesProps } from '../Blog'
import { PostConten } from './components/PostContent'
import { PostMainContainer } from './styles'

export function PostDetail() {
  const { id } = useParams()
  
  const [post, setPost] = useState<IssuesProps>({} as IssuesProps)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPost()
  }, [])

  async function getPost() {
    try {
      setIsLoading(true);
      const response = await api.get(`/repos/edimilsonbraz/ignite/issues/${id}`)
      setPost(response.data)
    } catch (error) {
      alert('Erro ao buscar post' + error)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <PostMainContainer className='container'>
      <PostHeader isLoading={isLoading} post={post} />
      <PostConten post={post}/>
    </PostMainContainer>
  )
}
