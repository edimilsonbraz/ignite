import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BannerContainer, IconsContent } from './styles'

import banner from '../../assets/banner.png'

interface IconProps {
  variant?: 'primary' | 'secondary' | 'base' | 'brand';
}

export function Intro(props: IconProps) {
  return (
    <BannerContainer>
      <div className="ContentText">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <IconsContent>
          <div>
            <button className='primary'>
              <ShoppingCart size={18} weight="fill" />
            </button>
            Compra simples e segura
          </div>
          <div>
            <button className='base'>
              <Package size={18} weight="fill" />
            </button>
            Embalagem mantém o café intacto
          </div>
          <div>
            <button className='secondary'>
              <Timer size={18} weight="fill" />
            </button>
            Entrega rápida e rastreada
          </div>
          <div>
            <button className='brand'>
              <Coffee size={18} weight="fill" />
            </button>
            O café chega fresquinho até você
          </div>
        </IconsContent>
      </div>
      <div>
        <img src={banner} alt="imagem Coffer Delivery" />
      </div>
    </BannerContainer>
  )
}
