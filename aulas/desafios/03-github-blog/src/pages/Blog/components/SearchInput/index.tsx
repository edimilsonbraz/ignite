import { SearchFormContainer, SearchFormText } from "./styles";
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchProps {
  totalIssues: number
  getIssues: (query?: string) => Promise<void>;
}

export function SearchInput({totalIssues, getIssues} : SearchProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchIssues(data: SearchFormInput) {
    await getIssues(data.query)
  }
  return (
    <SearchFormContainer
        className="container"
        onSubmit={handleSubmit(handleSearchIssues)}
      >
        <SearchFormText>
          <h3>Publicações</h3>
          <span>{totalIssues} publicações</span>
        </SearchFormText>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContainer>
  )
}
