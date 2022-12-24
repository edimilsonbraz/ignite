import styled from 'styled-components';
export const CardContainer = styled.section` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-bottom: 6rem;
`;

export const CardContent = styled.div` 
  background: ${props => props.theme['base-post']};
  
  
  padding: 2rem;
  border-radius: 10px;
  

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    h3 {
      color: ${props => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
    }
  }
`;