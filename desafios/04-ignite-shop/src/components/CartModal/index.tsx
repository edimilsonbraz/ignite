import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { CardFooterDetails, CardProductDetails, CartFooter, CartProduct, CartProductImage, CloseButton, ModalContent, ModalTitle } from './styles'

export function CartModal() {
  return (
    <Dialog.Portal>
      <ModalContent>
        <ModalTitle>
          <Dialog.Title>Sacola de compras</Dialog.Title>
        </ModalTitle>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <section>
          {/* <p>Parece que seu carrinho está vazio!</p> */}
          <CartProduct>
            <CartProductImage>
              <Image width={100} height={93} alt='' src='https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1675036800&Signature=cLlEo7DQP1wZQJ1HJC8TQDcec-D3c~DeJ0ScEGZs240CpeuQHnvYiVnVR1Mi-d2AngzBzsdC9NtVYmGs9F7CNED0Kce3GpVBKXZUIDgcR~ERB0XRGPtPN~r6Jw-vRaPg7WVxaczGY~8jOi5dftl4wuk8R3A3oILMrvj2s0bPyXDolgA9NoImA4Yp-wmjrVoOaNq3u3JCtj8t9IEBwFMWhlAAGnijPEOnO~uCm-0UrPSar9IzvHzpTMWA6BRzXg~48MuFxX~PcySfhEOxFZwg9zmBDyqrKFXqE5s7gwwz8D8xBKQOWvbpDYHP5irM6h8a0sGRdhAftDQEFF2pr60X-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
            </CartProductImage>
            <CardProductDetails>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79.90</strong>
              <button>Remover</button>
            </CardProductDetails>
          </CartProduct>

          <CartProduct>
            <CartProductImage>
              <Image width={100} height={93} alt='' src='https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1675036800&Signature=cLlEo7DQP1wZQJ1HJC8TQDcec-D3c~DeJ0ScEGZs240CpeuQHnvYiVnVR1Mi-d2AngzBzsdC9NtVYmGs9F7CNED0Kce3GpVBKXZUIDgcR~ERB0XRGPtPN~r6Jw-vRaPg7WVxaczGY~8jOi5dftl4wuk8R3A3oILMrvj2s0bPyXDolgA9NoImA4Yp-wmjrVoOaNq3u3JCtj8t9IEBwFMWhlAAGnijPEOnO~uCm-0UrPSar9IzvHzpTMWA6BRzXg~48MuFxX~PcySfhEOxFZwg9zmBDyqrKFXqE5s7gwwz8D8xBKQOWvbpDYHP5irM6h8a0sGRdhAftDQEFF2pr60X-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
            </CartProductImage>
            <CardProductDetails>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79.90</strong>
              <button>Remover</button>
            </CardProductDetails>
          </CartProduct>

          <CartProduct>
            <CartProductImage>
              <Image width={100} height={93} alt='' src='https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1675036800&Signature=cLlEo7DQP1wZQJ1HJC8TQDcec-D3c~DeJ0ScEGZs240CpeuQHnvYiVnVR1Mi-d2AngzBzsdC9NtVYmGs9F7CNED0Kce3GpVBKXZUIDgcR~ERB0XRGPtPN~r6Jw-vRaPg7WVxaczGY~8jOi5dftl4wuk8R3A3oILMrvj2s0bPyXDolgA9NoImA4Yp-wmjrVoOaNq3u3JCtj8t9IEBwFMWhlAAGnijPEOnO~uCm-0UrPSar9IzvHzpTMWA6BRzXg~48MuFxX~PcySfhEOxFZwg9zmBDyqrKFXqE5s7gwwz8D8xBKQOWvbpDYHP5irM6h8a0sGRdhAftDQEFF2pr60X-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
            </CartProductImage>
            <CardProductDetails>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79.90</strong>
              <button>Remover</button>
            </CardProductDetails>
          </CartProduct>
        </section>

        <CartFooter>
          <CardFooterDetails>
            <div>
              <span>Quantidade</span>
              <p>3 itens</p>
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
