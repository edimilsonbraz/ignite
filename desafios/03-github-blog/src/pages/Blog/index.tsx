import { Profile } from './components/Profile'
import { CardPost } from './components/CardPost'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <CardPost />
    </BlogContainer>
  )
}
