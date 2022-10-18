import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.background};
  -webkit-font-smoothing: antialiased; /* deixa a fonte mais detalhada nos navegadores */
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  /* color: var(--gray-100); */
}

h1, h2, h3, h4, h5 {
  font-family: 'Baloo 2', cursive;
}

`;