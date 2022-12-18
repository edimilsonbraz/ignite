import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
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
  const {
    order,
    quantityItems,
    calcPriceTotal,
    formData,
    setFormData,
    submitForm
  } = useContext(OrderContext)

  const frete = 3.5
  const totalItens = calcPriceTotal
  const total = totalItens + frete

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
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, cep: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  className="two"
                  type="text"
                  name="rua"
                  placeholder="Rua"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, rua: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  className="three"
                  type="text"
                  name="numero"
                  placeholder="Numero"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, numero: e.target.value })
                  }
                />
                <input
                  className="four"
                  type="text"
                  name="complemento"
                  placeholder="Complemento Opcional"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, complemento: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  className="five"
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, bairro: e.target.value })
                  }
                />
                <input
                  className="six"
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, cidade: e.target.value })
                  }
                />
                <input
                  className="seven"
                  type="text"
                  name="uf"
                  placeholder="UF"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, uf: e.target.value })
                  }
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
              <button
                type="button"
                value="Cartão de crédito "
                onClick={(e) =>
                  setFormData({ ...formData, pagamento: e.currentTarget.value })
                }
              >
                <CreditCard size={18} />
                Cartão de crédito
              </button>

              <button
                type="button"
                value="Cartão de débito"
                onClick={(e) =>
                  setFormData({ ...formData, pagamento: e.currentTarget.value })
                }
              >
                <Bank size={18} />
                Cartão de débito
              </button>
              <button
                type="button"
                value="Dinheiro"
                onClick={(e) =>
                  setFormData({ ...formData, pagamento: e.currentTarget.value })
                }
              >
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
              return (
                <MiniCard
                  key={item.idCoffee}
                  idCoffee={item.idCoffee}
                  title={item.title}
                  countCoffee={item.countCoffee}
                  imgUrl={item.imgUrl}
                  price={item.price}
                />
              )
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
                <span className="totalPrice">R$ {total.toFixed(2)}</span>
              </div>
              <button onClick={submitForm} disabled={quantityItems <= 0}>
                Confirmar Pedido
              </button>
            </TotalItens>
          </ContentCart>
        </ContainerRight>
      </form>
    </FormContainer>
  )
}
