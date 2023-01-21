import { createContext, ReactNode, useState } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextData {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  checkIfItemExistsToCart: (productId: string) => boolean;
  cartTotal: number;
  removeCartItem: (productId: string) => void;
}

interface CardContextProviderProps {
  children: ReactNode
}

//Criando o Contexto
export const CartContext = createContext({} as CartContextData)

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  },0);

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product])
  }

  function checkIfItemExistsToCart(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, checkIfItemExistsToCart, cartTotal, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
