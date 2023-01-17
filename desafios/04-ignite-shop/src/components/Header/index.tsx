import { ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from 'use-shopping-cart'
import { Handbag } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartModal } from '../CartModal'
import logoImg from '../../assets/logo.svg'
import { Cart, HeaderContainer } from './styles'

export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <>
      <HeaderContainer>
        <Link href={'/'} prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Cart>
              <span>{cartCount}</span>
              <Handbag size={20} weight="bold" color="#C4C4CC" alt="carrinho" />
              
              <CartModal />
            </Cart>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContainer>

    </>
  )
}
