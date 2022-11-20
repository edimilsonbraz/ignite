import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

import { Minus, Plus, Trash } from 'phosphor-react'

import { CoffeeCount, ItemCart, ItemCartInput } from './styles'

interface CartItemProps {
  idCoffee: number
  title: string
  countCoffee: number
  imgUrl: string
  price: number
}

export function MiniCard({
  idCoffee,
  title,
  countCoffee,
  imgUrl,
  price
}: CartItemProps) {
  const { changeQuantityCoffee, removeCoffe } = useContext(OrderContext)

  const [newQuantity, setNewQuantity] = useState(countCoffee)
  const [newValue, setNewValue] = useState(price * countCoffee)

  function SendNewQuantity(countCoffee: number) {
    const item = {
      idCoffee: idCoffee,
      title: title,
      imgUrl: imgUrl,
      price: price,
      countCoffee: countCoffee
    }
    changeQuantityCoffee(item)
  }

  function handleAddQuantity() {
    const addedQuantity = newQuantity + 1
    setNewQuantity(addedQuantity)
    setNewValue(newValue + price)

    SendNewQuantity(addedQuantity)
  }

  function handleRemoveQuantity() {
    if (newQuantity > 0) {
      const addedQuantity = newQuantity - 1
      setNewQuantity(addedQuantity)
      setNewValue(newValue - price)

      SendNewQuantity(addedQuantity)
    }
  }

  function handleRemoveItem() {
    const item = {
      idCoffee: idCoffee,
      title: title,
      imgUrl: imgUrl,
      price: price,
      countCoffee: newQuantity
    }

    removeCoffe(item)
  }

  return (
    <ItemCart key={idCoffee}>
      <img src={imgUrl} alt="" />
      <div>
        <p>{title}</p>
        <ItemCartInput>
          <CoffeeCount>
            <Minus size={16} className="sinal" onClick={handleRemoveQuantity} />

            <span>{newQuantity}</span>

            <Plus size={16} className="sinal" onClick={handleAddQuantity} />
          </CoffeeCount>
          <div className="button-remove" onClick={handleRemoveItem}>
            <Trash size={16} />
            Remover
          </div>
        </ItemCartInput>
      </div>
      <span>R$ {newValue.toFixed(2)}</span>
    </ItemCart>
  )
}
