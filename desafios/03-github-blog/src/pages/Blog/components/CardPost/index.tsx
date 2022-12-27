import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { CardContainer, CardContent, CardTitle } from './styles'

interface IssuesProps {
  title: string
  body: string
  number: number
}

export function CardPost() {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  useEffect(() => {
    getAllIssues()
  }, [])

  async function getAllIssues() {
    try {
      const response = await axios.get(
        'https://api.github.com/search/issues', {
          params: {
            q: 'repo:edimilsonbraz/ignite'
          }
        }

      )
      const dataUssues = response.data.items
      setIssues(dataUssues)
      console.log(dataUssues)
    } catch (error) {
      // alert('Erro ao buscar issues: ' + error)
    }
  }

  return (
    <CardContainer className="container">
      {issues.map((issue) => (
        
        <CardContent key={issue.number}>
          <CardTitle>
            <h3>{issue.title}</h3>
            <span>Há 1 dia</span>
          </CardTitle>
          <ReactMarkdown className='paragrath'>
            {issue.body}
          </ReactMarkdown>
        </CardContent>
      ))}
    </CardContainer>
  )
}
