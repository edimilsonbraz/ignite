import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
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
  TypePayment
} from './styles'

export function Checkout() {
  return (
    <FormContainer>
      <form action="">
        <ContainerLeft>
          <h3>Complete seu pedido</h3>
          <InputForm>
            <InputText>
              <MapPinLine size={22}/>
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </InputText>
            <InputContent>
              <div>
                <input className='one' type="text" name='cep' placeholder="CEP" />
              </div>
              <div>
                <input className='two' type="text" name='rua' placeholder="Rua" />
              </div>
              <div>
                <input className='three' type="text" name='numero' placeholder="Numero" />
                <input 
                  className='four' 
                  type="text" 
                  name='complemento' 
                  placeholder="Complemento Opcional"/>
              </div>
              <div>
                <input className='five' type="text" name='bairro' placeholder="Bairro" />
                <input className='six' type="text" name='cidade' placeholder="Cidade" />
                <input className='seven' type="text" name='placeholder' placeholder="UF" />
              </div>
            </InputContent>
          </InputForm>

          <TypePayment>
            <CurrencyDollar />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div>
              <div>
                <CreditCard />
                Cartão de crédito
              </div>
              <div>
                <Bank />
                Cartão de débito
              </div>
              <div>
                <Money />
                Dinheiro
              </div>
            </div>
          </TypePayment>
        </ContainerLeft>

        <ContainerRight>
          <h3>Cafés selecionados</h3>
          <ContentCart>
            <div>
              <img src="../../assets/coffees/americano.svg" alt="" />
              <div>
                <p>Expresso Tradicional</p>
                <input type="number" max="50" name="" id="" />
                <div>
                  <Trash />
                  Remover
                </div>
                R$ 9,90
              </div>
            </div>
            <div>
              <img src="../../assets/coffees/latte.svg" alt="" />
              <div>
                <p>Latte</p>
                <input type="number" max="50" name="" id="" />
                <div>
                  <Trash />
                  Remover
                </div>
                R$ 19,90
              </div>
            </div>

            <div>
              <div>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <p>Total</p>
                <span>R$ 33,20</span>
              </div>
              <button type="submit">Confirmar Pedido</button>
            </div>
          </ContentCart>
        </ContainerRight>
      </form>
    </FormContainer>
  )
}
