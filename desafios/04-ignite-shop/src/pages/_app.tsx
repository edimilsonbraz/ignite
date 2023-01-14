import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
// import { CartProvider } from 'use-shopping-cart/react'

import logoImg from '../assets/logo.svg'
import { Cart, Container, Header } from '../styles/pages/app'

import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = `${process.env.NEXT_URL}`

  return (
    // <CartProvider
      // mode="payment"
      // cartMode="checkout-session"
      // stripe={successUrl}
      // currency="USD"
    // >
      <Container>
        <Header>
          <Link href={'/'} prefetch={false}>
            <Image src={logoImg} alt="" />
          </Link>
          <Cart>
            <span>1</span>
            <Handbag size={20} weight="bold" color="#C4C4CC" alt="carrinho" />
          </Cart>
        </Header>

        <Component {...pageProps} />
      </Container>
    // </CartProvider>
  )
}
