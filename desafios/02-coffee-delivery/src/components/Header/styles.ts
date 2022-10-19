import styled from 'styled-components';

export const HeaderContainer = styled.header `  
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;  
    color: ${props => props.theme['purple-700']};


    .locale {
      background: ${props => props.theme['purple-300']};
      padding: 0.5rem;
      border-radius: 6px;
      font-size: 0.875rem;

      svg {
        margin-right: 0.5rem;
      }
    }

    button {
      background: ${props => props.theme['yellow-300']};
      color: ${props => props.theme['yellow-700']};

      padding: 0.5rem;
      border-radius: 6px;
      border: 0;
      border-radius: 6px;

      margin-left: 0.75rem;

      cursor: pointer;
    }
  }
`;