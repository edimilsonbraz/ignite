import { Header } from '../components/Header'
import type { AppProps } from 'next/app'
import { CardContextProvider } from '../contexts/CartContext'

import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CardContextProvider>
  )
}
