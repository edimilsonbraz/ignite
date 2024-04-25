import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Stripe from 'stripe'
import { CartContext, IProduct } from '../../contexts/CartContext'

import { stripe } from '../../lib/stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '../../styles/pages/product'

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const {isFallback} = useRouter();

  const {addToCart, checkIfItemExistsToCart} = useContext(CartContext);

  if(isFallback) {
    return <p>Loading...</p>
  }

  const itemAlreadyInCart = checkIfItemExistsToCart(product.id)
  
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={itemAlreadyInCart}
            onClick={() => addToCart(product)}
          >
            {itemAlreadyInCart  ?
            "Produto já existe no carrinho" :
            "Colocar no carrinho"} 
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = [{ params: { id: 'prod_N7CvzqR56JHbE8' } }];

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id  

  //Buscando os dados do Product
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1hour
  }
}