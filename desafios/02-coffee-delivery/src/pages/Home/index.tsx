import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeList } from '../../components/CoffeeList'
import { coffeItem } from '../../contexts/coffeeItem'

import { BannerContainer, CoffeeContainer, CoffeeContent, IconsContent } from './styles'
import banner from '../../assets/banner.png'

export function Home() {
  return (
    <>
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

      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeContent>
          {coffeItem.map((item) => {
            return (
              <CoffeeList
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                tags={item.tags}
                price={item.price}
              />
            )
          })}
        </CoffeeContent>
      </CoffeeContainer>
    </>
  )
}
