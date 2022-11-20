import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  ContainerLeft,
  ContainerRight,
  ContentCart,
  FormContainer,
  InputContent,
  InputForm,
  InputText,
  TotalItens,
  TypePayment
} from './styles'
import { MiniCard } from './components/MiniCard'

interface CartItemProps {
  idCoffee: number
  title: string
  countCoffee: number
  imgUrl: string
  price: number
}

export function Checkout() {
  const { order, quantityItems, valueTotal } = useContext(OrderContext)

  const frete = 3.50
  const totalItens = valueTotal
  const total = totalItens + frete

  console.log(order)
  console.log(quantityItems)

  return (
    <FormContainer>
      <form action="">
        <ContainerLeft>
          <h3>Complete seu pedido</h3>
          <InputForm>
            <InputText>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </InputText>
            <InputContent>
              <div>
                <input
                  className="one"
                  type="text"
                  name="cep"
                  placeholder="CEP"
                />
              </div>
              <div>
                <input
                  className="two"
                  type="text"
                  name="rua"
                  placeholder="Rua"
                />
              </div>
              <div>
                <input
                  className="three"
                  type="text"
                  name="numero"
                  placeholder="Numero"
                />
                <input
                  className="four"
                  type="text"
                  name="complemento"
                  placeholder="Complemento Opcional"
                />
              </div>
              <div>
                <input
                  className="five"
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                />
                <input
                  className="six"
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                />
                <input
                  className="seven"
                  type="text"
                  name="placeholder"
                  placeholder="UF"
                />
              </div>
            </InputContent>
          </InputForm>

          <TypePayment>
            <div className="paymentText">
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="paymentCart">
              <button value="cartaoCredito">
                <CreditCard size={18} />
                Cartão de crédito
              </button>
              <button value="cartaoDebito">
                <Bank size={18} />
                Cartão de débito
              </button>
              <button value="debito">
                <Money size={18} />
                Dinheiro
              </button>
            </div>
          </TypePayment>
        </ContainerLeft>

        <ContainerRight>
          <h3>Cafés selecionados</h3>
          <ContentCart>
            {order.map((item) => {
              return <MiniCard 
              key={item.idCoffee}
              idCoffee={item.idCoffee}
              title={item.title}
              countCoffee={item.countCoffee}
              imgUrl={item.imgUrl}
              price={item.price}
              />
            })}
            <TotalItens>
              <div>
                <p>Total de itens</p>
                <span>R$ {totalItens.toFixed(2)} </span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <h3>Total</h3>
                <span className="totalPrice">R$ {total}</span>
              </div>
              <button type="submit">Confirmar Pedido</button>
            </TotalItens>
          </ContentCart>
        </ContainerRight>
      </form>
    </FormContainer>
  )
}
