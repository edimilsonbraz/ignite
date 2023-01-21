import { GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import { CartContext, IProduct } from '../contexts/CartContext'
import { Handbag } from 'phosphor-react'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

import { HomeContainer, Product } from '../styles/pages/home'
import 'keen-slider/keen-slider.min.css'
import { MouseEvent, useContext } from 'react'

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  const {addToCart} = useContext(CartContext);

  function handleAddToCart(e:MouseEvent<HTMLSpanElement>, product: IProduct) {
    e.preventDefault();

    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <span onClick={(e) => handleAddToCart(e, product)}>
                    <Handbag 
                    size={32} color='#fff' 
                    weight='bold'
                  />
                  </span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 //2hrs
  }
}
