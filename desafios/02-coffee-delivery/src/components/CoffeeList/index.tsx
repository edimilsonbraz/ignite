import {
  BaseInput,
  CoffeeCount,
  CoffeList,
  TagContainer,
  TagContent,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export interface CoffeeProps {
  id: number
  imgUrl: string
  tags: string[] | undefined
  title: string
  description: string
  price: number
}

export function CoffeeList(props: CoffeeProps) {
  const [countCoffee, setCountCoffee] = useState(0);
  
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
          R$ <span className='price'>{props.price}</span>
          <CoffeeCount>
            <Minus 
              size={16} 
              className='sinal'
              onClick={() => setCountCoffee((countCoffee - 1))}
            />
            
            <span>{countCoffee}</span>

            <Plus 
              size={16}
              className='sinal' 
              onClick={() => setCountCoffee((countCoffee + 1))}
            />
            
          </CoffeeCount>
          
          <button className='buttonCart'>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </BaseInput>
      </div>
    </CoffeList>
  )
}
