import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'} prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
        <span>
          <Handbag 
            size={20} 
            weight="bold" 
            color="#8D8D99" 
            alt='carrinho'
          />
        </span>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
