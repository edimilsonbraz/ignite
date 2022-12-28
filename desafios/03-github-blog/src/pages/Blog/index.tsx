import { Profile } from './components/Profile'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  BlogContainer,
  CardContainer,
  CardContent,
  CardTitle,
  SearchFormContainer,
  SearchFormText
} from './styles'
import { Link } from 'react-router-dom'

export interface IssuesProps {
  title: string
  body: string
  number: number
}

export function Blog() {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  useEffect(() => {
    getAllIssues()
  }, [])

  async function getAllIssues() {
    try {
      const response = await axios.get('https://api.github.com/search/issues', {
        params: {
          q: 'repo:edimilsonbraz/ignite'
        }
      })
      const dataIssues = response.data.items
      setIssues(dataIssues)
      console.log(issues.length)
    } catch (error) {
      alert('Erro ao buscar issues: ' + error)
    }
  }

  return (
    <BlogContainer>
      <Profile />

      <SearchFormContainer className="container">
        <SearchFormText>
          <h3>Publicações</h3>
          <span>{issues.length} publicações</span>
        </SearchFormText>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          // {...register('query')}
        />
      </SearchFormContainer>

      <CardContainer className="container">
        {issues.map((issue) => (
          <CardContent key={issue.number}>
            <Link to={`/post/${issue.number}`}>
              <CardTitle>
                <h3>{issue.title}</h3>
                <span>Há 1 dia</span>
              </CardTitle>
              <ReactMarkdown className="paragrath">{issue.body}</ReactMarkdown>
            </Link>
          </CardContent>
        ))}
      </CardContainer>
    </BlogContainer>
  )
}
