import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { OrderContextProvider } from './contexts/OrderContext';
import { Router } from './Router';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


