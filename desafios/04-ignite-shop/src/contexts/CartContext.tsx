import { createContext, ReactNode, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  checkIfItemExistsToCart: (productId: string) => boolean;
}

interface CardContextProviderProps {
  children: ReactNode
}

//Criando o Contexto
export const CartContext = createContext({} as CartContextData)

export function CardContextProvider({children}: CardContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product])
  }

  function checkIfItemExistsToCart (productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return ( 
    <CartContext.Provider value={{ cartItems, addToCart, checkIfItemExistsToCart }}>

      {children}
    </CartContext.Provider>
   );
}

