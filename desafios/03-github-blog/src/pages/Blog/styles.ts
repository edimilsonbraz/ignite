import styled from 'styled-components';

export const BlogContainer = styled.section` 

`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-bottom: 6rem;
`

export const CardContent = styled.a`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: 400ms;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  .paragrath {
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
  }

  span {
    font-size: 0.875rem;
  }
`