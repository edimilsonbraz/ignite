import { Profile } from './components/Profile'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  BlogContainer,
  CardContainer,
  CardContent,
  CardTitle,
  SearchFormContainer,
  SearchFormText
} from './styles'

export interface IssuesProps {
  title: string
  body: string
  number: number
  created_at: string
}

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Blog() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchIssues(data: SearchFormInput) {
    await getIssues(data.query)
  }

  const [issues, setIssues] = useState<IssuesProps[]>([])

  //Formatando data
  // const publishedDateFormatted = formattedDate(issues)

  useEffect(() => {
    getIssues()
  }, [])

  async function getIssues(query: string = "") {
    try {
      const response = await axios.get(`https://api.github.com/search/issues?q=${query}%20repo:edimilsonbraz/ignite`);

      const dataIssues = response.data.items
     
      setIssues(dataIssues)
    } catch (error) {
      alert('Erro ao buscar issues: ' + error)
    }
  }

  return (
    <BlogContainer>
      <Profile />

      <SearchFormContainer
        className="container"
        onSubmit={handleSubmit(handleSearchIssues)}
      >
        <SearchFormText>
          <h3>Publicações</h3>
          <span>{issues.length} publicações</span>
        </SearchFormText>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
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
