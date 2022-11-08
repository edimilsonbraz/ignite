import { createContext, ReactNode, useState } from 'react'

interface coffeOrderProps {
  idCoffee: number
  title: string
  countCoffee: number
  price: number
}

interface OrderContextData {
  coffeeOrder: (data: coffeOrderProps) => void
  order: coffeOrderProps[]
  quantityItems: number
}

//Criando o Contexto
export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<coffeOrderProps[]>([])
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

  return(
    <OrderContext.Provider
      value={{
        coffeeOrder,
        quantityItems,
        order,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}