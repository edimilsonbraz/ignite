import { OrderContext } from '../../contexts/OrderContext'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import {
  BaseInput,
  CoffeeCount,
  CoffeList,
  TagContainer,
  TagContent
} from './styles'

export interface CoffeeProps {
  id: number
  imgUrl: string
  tags: string[] | undefined
  title: string
  description: string
  price: number
}

export function CoffeeList(props: CoffeeProps) {
  const { addToCart } = useContext(OrderContext)
  const [countCoffee, setCountCoffee] = useState(1)

  function sumItemCoffee() {
    setCountCoffee(countCoffee + 1)
  }

  function decreaseItemCoffe() {
    if (countCoffee > 0) {
      setCountCoffee(countCoffee - 1)
    }
  }

  function handleCoffeeOrder() {
    addToCart({
      idCoffee: props.id,
      title: props.title,
      imgUrl: props.imgUrl,
      price: props.price,
      countCoffee,
    })
  }

  return (
    <CoffeList>
      <div className="coffeeCard">
        <img src={props.imgUrl} alt="" />
        <TagContainer>
          {props.tags?.map((item, i) => {
            return <TagContent key={i}>{item}</TagContent>
          })}
        </TagContainer>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <BaseInput>
          R$ <span className="price">{props.price}</span>
          <CoffeeCount>
            <Minus size={16} className="sinal" onClick={decreaseItemCoffe} />

            <span>{countCoffee}</span>

            <Plus size={16} className="sinal" onClick={sumItemCoffee} />
          </CoffeeCount>
          <button className="buttonCart" onClick={handleCoffeeOrder}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </BaseInput>
      </div>
    </CoffeList>
  )
}
