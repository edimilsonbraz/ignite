import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface coffeOrderProps {
  idCoffee: number
  title: string
  imgUrl: string
  countCoffee: number
  price: number
}

interface FormData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

interface OrderContextData {
  addToCart: (newState: coffeOrderProps) => void
  order: coffeOrderProps[]
  quantityItems: number
  formData: FormData
  calcPriceTotal: number
  setFormData: (newState: FormData) => void
  submitForm: (e: React.MouseEvent<HTMLElement>) => void,
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
  const [formData, setFormData] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    pagamento: ''
  })

  const navigate = useNavigate();

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

  }

  //Remove item do Carrinho => Checkout
  function removeCoffe(coffeSelected: coffeOrderProps) {
    const NewList = order.filter(
      (coffee) => coffee.idCoffee !== coffeSelected.idCoffee
    )

    setOrder(NewList)
  }

  //Valor total do pedido => Checkout
  const  calcPriceTotal = order.reduce((total, coffeItem) => {
    return total + coffeItem.price * coffeItem.countCoffee
  },0);
  
  
  function submitForm(event: React.MouseEvent<HTMLElement> ) {
    event.preventDefault()
   
    if (
      formData.cep  !== '' ||
      formData.rua  !== '' ||
      formData.bairro !== '' ||
      formData.cidade  !== '' ||
      formData.uf !== ''

      ) {
      console.log(formData)
      navigate('/success')
    } else {
      alert('Preencha os campos solicitados')
    }
  }

  return (
    <OrderContext.Provider
      value={{
        addToCart,
        quantityItems,
        order,
        changeQuantityCoffee,
        removeCoffe,
        calcPriceTotal,
        formData,
        setFormData,
        submitForm
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
