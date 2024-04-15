import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { CardListContainer } from './styles'

export interface IssuesProps {
  title: string
  body: string
  number: number
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function Blog() {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  useEffect(() => {
    getIssues()
  }, [])

  async function getIssues(query: string = '') {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:edimilsonbraz/ignite`
      )

      setIssues(response.data.items)

    } catch (error) {
      alert('Erro ao buscar issues: ' + error)
    }
  }

  return (
    <>
      <Profile/>
      <SearchInput totalIssues={issues.length} getIssues={getIssues}/>
      <CardListContainer className='container'>
      {issues.map((issue) => (
        <Card key={issue.number} issue={issue}/>
      ))}
      </CardListContainer>
    </>
  )
}
