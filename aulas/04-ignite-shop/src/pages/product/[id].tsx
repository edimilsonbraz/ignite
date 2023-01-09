import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ex
          recusandae, provident perferendis maxime fugiat architecto commodi
          repellat est corrupti adipisci aliquid perspiciatis consequuntur sed
          optio temporibus, tempore quasi? Alias.
        </p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
