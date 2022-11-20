import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext'

import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react';
import logoCoffe from '../../assets/loco-coffee.svg'

export function Header() {

  const {quantityItems} = useContext(OrderContext)
  
  return ( 
    <HeaderContainer>
      <NavLink to="/" end title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <nav>
        <div className='locale'>
          <MapPin size={22} weight="fill"/>
          <span>Brasília, DF</span>
        </div>
        <NavLink to="/Checkout" end title="Checkout">
          <div className='cart'>
            {quantityItems > 0 ? <span>{quantityItems}</span> : null}
            <ShoppingCart size={22} weight="fill"/>
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

 