import styled from 'styled-components';

export const BlogContainer = styled.section` 

`;

export const SearchFormContainer = styled.form` 
  margin-bottom: 3rem;

  input {
    width: 100%;
    border-radius: 6px;
    border: 0;
    box-shadow: 0 0 0 1px ${props => props.theme['base-border']};
    color: ${props => props.theme['base-text']};
    background: ${props => props.theme['base-input']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme.blue};
    }
  }
`;

export const SearchFormText = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: .75rem;

  span {
    color: ${props => props.theme['base-span']};
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-bottom: 6rem;
`

export const CardContent = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
 
  transition: 400ms;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  .paragrath {
    color: ${(props) => props.theme['base-text']};
    line-height: 25.6px;
    max-height: 180px; // Limite maximo do texto
    overflow: hidden; // Removendo a barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final do texto
  }
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  h3 {
    color: ${(props) => props.theme['base-title']};
    line-height: 160%;
  }

  span {
    font-size: 0.875rem;
  }
`