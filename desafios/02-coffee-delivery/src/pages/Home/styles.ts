import styled from "styled-components";
import backgroundImg from '../../assets/bg-image.png';

export const BannerContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${backgroundImg}) no-repeat center`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const BannerContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const ContentText = styled.div `
  h1 {
    line-height: 3.875rem;
  }

  p {
    max-width: 34rem;
    line-height: 1.625rem;
    margin-top: 1rem;
    font-size: 1.125rem;
  }
`;

export const IconsContent = styled.div`
  margin-top: 4.125rem;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  row-gap: 1.25rem;

  div {
    svg {
      color: ${props => props.theme.white};
      
    }

    button {      
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 50px;

      padding: 0.4rem;

      margin-right: 0.5rem;
    }

    .primary {
      background: ${props => props.theme['yellow-700']};
    }
    .secondary {
      background: ${props => props.theme['yellow-500']};
    }
    .base {
      background: ${props => props.theme['base-text']};
    }
    .brand {
      background: ${props => props.theme['purple-500']};
    }
  }
`

export const CoffeeContainer = styled.section`
  margin-bottom: 5rem; 

  h2 {
    margin-bottom: 3.375rem;
  }
`;

export const CoffeeContent = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  div:nth-child(4n) {
    grid-gap: 0rem;
  }
`;