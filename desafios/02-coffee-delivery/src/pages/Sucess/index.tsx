import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderDataContainer, OrderDataContent, OrderDataIcons, OrderTitle } from './styles'

import delivery from '../../assets/delivery.svg'

export function Success() {
  return (
    <>
      <OrderTitle>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderTitle>
      <OrderDataContainer>
        <OrderDataContent>
          <OrderDataIcons>
            <div className='brand'>
              <MapPin size={32} weight="fill"/>
            </div>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderDataIcons>
          <OrderDataIcons>
            <div className='secondary'>
              <Timer size={32} weight="fill"/>
            </div>
            <div>
              <p>Previsão de entrega  </p>
              <p><strong>20 min - 30 min </strong> </p>
            </div>
          </OrderDataIcons>
          <OrderDataIcons>
            <div className='primary'>
              <CurrencyDollar size={32} weight="fill"/>
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>Cartão de Crédito</strong></p>
            </div>
          </OrderDataIcons>
        </OrderDataContent>
        <div>
          <img src={delivery} alt="" />
        </div>
      </OrderDataContainer>
    </>
  )
}
