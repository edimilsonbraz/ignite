import { SearchFormContainer, SearchFormText } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer className="container">
      <SearchFormText>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </SearchFormText>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        // {...register('query')}
      />

     
    </SearchFormContainer>
  )
}
