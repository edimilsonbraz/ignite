import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
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
  const { cartItems, cartTotal, removeCartItem } = useContext(CartContext)
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartTotal)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post("/api/checkout", {
        products: cartItems
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Error ao tentar finalizar a compra ' + error)
    }
  }

  return (
    <Dialog.Portal>
      <ModalContent>
        <ModalTitle>
          <h2>Sacola de compras</h2>
        </ModalTitle>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <section>
          <>
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio!!!</p>}

            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    alt=""
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CardProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeCartItem(cartItem.id)}>
                    Remover
                  </button>
                </CardProductDetails>
              </CartProduct>
            ))}
          </>
        </section>

        <CartFooter>
          <CardFooterDetails>
            <div>
              <span>Quantidade</span>
              <p>
                {cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}
              </p>
            </div>
            <div>
              <span>Valor total</span>
              <p>{formattedCartTotal}</p>
            </div>
          </CardFooterDetails>

          <button
            onClick={handleCheckout}
            disabled={isCreatingCheckoutSession || cartQuantity <= 0}
          >
            Finalizar compra
          </button>
        </CartFooter>
      </ModalContent>
    </Dialog.Portal>
  )
}
