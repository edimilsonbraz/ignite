import styled from 'styled-components';

export const HeaderContainer = styled.header `  
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--gray-400);

  nav {
    display: flex;
    align-items: center;  

    .locale {
      background: ${props => props.theme['purple-300']};
      padding: 0.875rem;
      border-radius: 6px;

      svg {
        color: ${props => props.theme['purple-700']};
      }

      span {
        color: ${props => props.theme['purple-700']};
      }
    }
  }

`