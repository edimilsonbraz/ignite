import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'

import { Cart, HeaderContainer} from '../../styles/pages/app'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'} prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>
      <Cart>
        <span>1</span>
        <Handbag size={20} weight="bold" color="#C4C4CC" alt="carrinho" />
      </Cart>
    </HeaderContainer>
  )
}
