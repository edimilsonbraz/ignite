import ReactMarkdown from 'react-markdown'
import { CardContainer, CardTitle } from './styles'
import { IssuesProps } from '../..'
import { formattedDate } from '../../../../utils/formatter'

interface IssueProps {
  issue: IssuesProps
}
export function Card({ issue }: IssueProps) {
  //Formatando data
  const publishedDateFormatted = formattedDate(issue.created_at)

  return (
    <CardContainer key={issue.number} to={`/post/${issue.number}`}>
      <CardTitle>
        <h3>{issue.title}</h3>
        <span>{publishedDateFormatted}</span>
      </CardTitle>
      <ReactMarkdown className="paragrath">{issue.body}</ReactMarkdown>
    </CardContainer>
  )
}
