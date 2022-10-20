import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 34rem;

  display: grid;
  grid-template-columns: 2fr 1fr;

  padding-top: 5.875rem;

  .ContentText {
    padding-right: 3.375rem;
  }

  h1 {
    line-height: 3.875rem;
  }

  p {
    max-width: 34rem;
    line-height: 1.625rem;
    margin-top: 1rem;
    font-size: 1.125rem;
  }
`

export const IconsContent = styled.div`
  margin-top: 4.125rem;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  row-gap: 1.25rem;

  div {
    /* margin-right: 2.5rem; */
    
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
