import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  OrderContainer,
  OrderDataContainer,
  OrderDataContent,
  OrderDataIcons,
} from './styles'

import delivery from '../../assets/delivery.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Success() {
  const { formData } = useContext(OrderContext)

  return (
    <OrderContainer className="container">
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderDataContainer>
        <OrderDataContent>
          <OrderDataIcons>
            <div className="brand">
              <MapPin size={32} weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {formData.rua}, {formData.numero}
                </strong>
              </p>
              <p>
                {formData.bairro} - {formData.cidade}, {formData.uf}
              </p>
            </div>
          </OrderDataIcons>
          <OrderDataIcons>
            <div className="secondary">
              <Timer size={32} weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega </p>
              <p>
                <strong>20 min - 30 min </strong>{' '}
              </p>
            </div>
          </OrderDataIcons>
          <OrderDataIcons>
            <div className="primary">
              <CurrencyDollar size={32} weight="fill" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{formData.pagamento}</strong>
              </p>
            </div>
          </OrderDataIcons>
        </OrderDataContent>
        <div>
          <img src={delivery} alt="" />
        </div>
      </OrderDataContainer>
    </OrderContainer>
  )
}
