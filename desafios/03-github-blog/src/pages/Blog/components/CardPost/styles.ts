import styled from 'styled-components'
export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-bottom: 6rem;
`;

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

  p {
    line-height: 25.6px;
  }
`;

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
`;
