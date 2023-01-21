import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
  CardFooterDetails,
  CardProductDetails,
  CartFooter,
  CartProduct,
  CartProductImage,
  CloseButton,
  ModalContent,
  ModalTitle
} from './styles'

export function CartModal() {
  const { cartItems } = useContext(CartContext)
  const cartQuantity = cartItems.length

  return (
    <Dialog.Portal>
      <ModalContent>
        <ModalTitle>
          <h2>Sacola de compras</h2>
        </ModalTitle>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <>
          {cartQuantity <= 0 ? (
            <p>Parece que seu carrinho está vazio!! </p>
          ) : null}

          {cartItems.map((cartItem) => {
            <CartProduct key={cartItem.id}>
              <CartProductImage>
                <Image width={100} height={93} alt="" src={cartItem.imageUrl} />
              </CartProductImage>
              <CardProductDetails>
                <p>{cartItem.name}</p>
                <strong>{cartItem.price}</strong>
                <button onClick={() => alert('Remover item')}>Remover</button>
              </CardProductDetails>
            </CartProduct>
          })}
        </>

        <CartFooter>
          <CardFooterDetails>
            <div>
              <span>Quantidade</span>
              <p>
                {cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'}
              </p>
            </div>
            <div>
              <span>Valor total</span>
              <p>R$ 270,00</p>
            </div>
          </CardFooterDetails>

          <button>Finalizar compra</button>
        </CartFooter>
      </ModalContent>
    </Dialog.Portal>
  )
}
