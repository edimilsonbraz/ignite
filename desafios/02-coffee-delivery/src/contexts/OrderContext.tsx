import { createContext, ReactNode, useState } from 'react'

interface coffeOrderProps {
  idCoffee: number
  title: string
  imgUrl: string
  countCoffee: number
  price: number
}

interface OrderContextData {
  coffeeOrder: (data: coffeOrderProps) => void
  order: coffeOrderProps[]
  quantityItems: number
  calcTotalPriceCoffee: () => void
  removeFromCard: (idCoffee: number) => void
}

//Criando o Contexto
export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<coffeOrderProps[]>([])
  const [itemsInCard, setItemsInCard ] = useState([])

  let quantityItems = 0
  
  if (order.length > 0) {
    quantityItems = order
      .map((item) => item.countCoffee)
      .reduce((prev, next) => prev + next)
  }

  function coffeeOrder(data: coffeOrderProps) {
    const tempOrder = order

    const temp = tempOrder.filter((itemFind) => {
      return itemFind.idCoffee !== data.idCoffee
    })
    if (data.countCoffee > 0) {
      if (temp) {
        setOrder([...temp, data])
      } else {
        setOrder([...order, data])
      }
    } else {
      setOrder([...temp])
    }
  }

  function calcTotalPriceCoffee() {
    const total = itemsInCard.reduce((ac, item) => {
      const newValue = item.countCoffee * item.price
      return (ac += newValue)
    }, 0)

    return total.toFixed(2)
  }

  function removeFromCard(idCoffee: number) {
    const filteredItems = itemsInCard.filter((item) => item.idCoffee !== idCoffee)
    console.log("id: ",filteredItems)
    setItemsInCard(filteredItems)
  }

  return(
    <OrderContext.Provider
      value={{
        coffeeOrder,
        quantityItems,
        order,
        calcTotalPriceCoffee,
        removeFromCard,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}