import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
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
  justify-content: space-between;

  margin-bottom: 1.25rem;

  h3 {
    flex: 1;
    color: ${(props) => props.theme['base-title']};
    line-height: 160%;
  }

  span {
    width: max-content;
    font-size: 0.875rem;
  }
`