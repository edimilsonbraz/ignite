import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash
} from 'phosphor-react'

import {
  ContainerLeft,
  ContainerRight,
  ContentCart,
  FormContainer,
  InputContent,
  InputForm,
  InputText,
  ItemCart,
  ItemCartInput,
  TotalItens,
  TypePayment
} from './styles'

import coffee001 from '../../assets/coffees/americano.svg'
import coffee002 from '../../assets/coffees/latte.svg'

export function Checkout() {
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
            <div className='paymentText'>
              <CurrencyDollar size={22}/>
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className='paymentCart'>
              <button value="cartaoCredito">
                <CreditCard size={18}/>
                Cartão de crédito
              </button>
              <button value="cartaoDebito">
                <Bank size={18}/>
                Cartão de débito
              </button>
              <button value="debito">
                <Money size={18}/>
                Dinheiro
              </button>
            </div>
          </TypePayment>
        </ContainerLeft>

        <ContainerRight>
          <h3>Cafés selecionados</h3>
          <ContentCart>
            <ItemCart>
              <img src={coffee001} alt="" />
              <div>
                <p>Expresso Tradicional</p>
                <ItemCartInput>
                  <input type="number" max="50" name="" id="" />
                  <button>
                    <Trash size={16}/>
                    Remover
                  </button>
                </ItemCartInput>               
              </div>
              <span>
                R$ 9,90
              </span>
            </ItemCart>
            <ItemCart>
              <img src={coffee002} alt="" />
              <div>
                <p>Latte</p>
                <ItemCartInput>
                  <input type="number" max="50" name="" id="" />
                  <button>
                    <Trash size={16}/>
                    Remover
                  </button>
                </ItemCartInput>                
              </div>
              <span>
                R$ 19,90
              </span>
            </ItemCart>

            <TotalItens>
              <div>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <h3>Total</h3>
                <span className='totalPrice'>R$ 33,20</span>
              </div>
              <button type="submit">Confirmar Pedido</button>
            </TotalItens>
          </ContentCart>
        </ContainerRight>
      </form>
    </FormContainer>
  )
}
