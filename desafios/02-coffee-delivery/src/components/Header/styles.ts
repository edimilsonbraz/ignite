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

      margin-right: 0.75rem;

      svg {
        margin-right: 0.5rem;
      }
    }

    .cart {
      background: ${props => props.theme['yellow-300']};
      color: ${props => props.theme['yellow-700']};

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 42px;

      padding: 0.5rem;
      border-radius: 6px;
      border: 0;
      border-radius: 6px;

      span {
        /* visibility: hidden; */
        position: absolute;
        top: -8px;
        right: -8px;
        color: ${props => props.theme.white};
        background: ${props => props.theme['yellow-700']};
        font-size: 0.875rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 999px;

      }

      

      cursor: pointer;
    }
  }
`;