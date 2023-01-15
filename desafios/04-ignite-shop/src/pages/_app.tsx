import { Header } from '../components/Header'
import { CartProvider } from 'use-shopping-cart'
import type { AppProps } from 'next/app'

import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = `${process.env.NEXT_URL}`

  return (
    <CartProvider
      stripe={successUrl}
      cartMode="checkout-session"
      currency="BRL"
      shouldPersist
    >
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
