import {
  BaseInput,
  CoffeList,
  TagContainer,
  TagContent,
  ValueCoffeInput
} from './styles'

import { ShoppingCart } from 'phosphor-react'

export interface CoffeeProps {
  id: number
  imgUrl: string
  tags: string[] | undefined
  title: string
  description: string
  price: number
}

export function CoffeeList(props: CoffeeProps) {
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
          R$ <span>{props.price}</span>
          <ValueCoffeInput
            type="number"
            min="0"
            max="100"
            name="number"
            id=""
          />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </BaseInput>
      </div>
    </CoffeList>
  )
}
