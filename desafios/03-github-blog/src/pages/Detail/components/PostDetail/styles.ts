import styled from 'styled-components';

export const PostDetailContainer = styled.section`
  padding: 2.5rem 2rem;

`;

export const PostDetailContent = styled.div` 
  h4 {
    color: ${props => props.theme.blue};
    margin-top: 1rem;
  }
`;