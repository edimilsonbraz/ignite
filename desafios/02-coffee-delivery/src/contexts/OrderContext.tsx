import { createContext, ReactNode, useState } from 'react'

interface coffeOrderProps {
  idCoffee: number
  title: string
  imgUrl: string
  countCoffee: number
  price: number
}

interface OrderContextData {
  addToCart: (newState: coffeOrderProps) => void
  order: coffeOrderProps[]
  quantityItems: number
  valueTotal: number
  changeQuantityCoffee: (newState: coffeOrderProps) => void
  removeCoffe: (newState: coffeOrderProps) => void
}

//Criando o Contexto
export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<coffeOrderProps[]>([])
  const [valueTotal, setValueTotal] = useState(0)

  let quantityItems = 0
  if (order.length > 0) {
    quantityItems = order
      .map((item) => item.countCoffee)
      .reduce((prev, next) => prev + next)
  }

  //Adiciona itens no Carrinho => Home
  function addToCart(coffeSelected: coffeOrderProps) {
    if (coffeSelected.countCoffee === 0) {
      window.alert('Adicione uma Quantidade ao seu pedido!')
    } else {
      const duplicate = order.find(
        (item) => item.idCoffee == coffeSelected.idCoffee
      )

      if (duplicate) {
        window.alert('Item já adicionado ao carrinho!')
      } else {
        setOrder([...order, coffeSelected])
      }
    }
  
  }

  //Atualiza itens do carrinho => Checkout
  function changeQuantityCoffee(coffeSelected: coffeOrderProps) {
    const newCart = order.map((item) => {
      if (item.idCoffee === coffeSelected.idCoffee) {
        return {
          ...item,
          countCoffee: coffeSelected.countCoffee
        }
      }

      return item
    })

    setOrder(newCart)
    //Ve aqui que está errado!
    calcValueTotal()
  }

  //Remove item do Carrinho => Checkout
  function removeCoffe(coffeSelected: coffeOrderProps) {
    const NewList = order.filter(
      (coffee) => coffee.idCoffee !== coffeSelected.idCoffee
    )

    setOrder(NewList)
  }

  //Valor total do pedido => Checkout
  function calcValueTotal() {
    let calc = 0

    order.map(item => {
      calc += item.price * item.countCoffee
    })

    setValueTotal(calc)
  }

  return (
    <OrderContext.Provider
      value={{
        addToCart,
        quantityItems,
        order,
        changeQuantityCoffee,
        removeCoffe,
        valueTotal
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
