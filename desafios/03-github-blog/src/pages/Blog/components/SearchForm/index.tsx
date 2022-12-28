import { IssuesProps } from "../..";
import { SearchFormContainer, SearchFormText } from "./styles";

export function SearchForm(issues: IssuesProps[]) {
  console.log(issues)
  
  return (
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
  )
}
