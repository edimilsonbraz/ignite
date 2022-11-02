import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react';

import logoCoffe from '../../assets/loco-coffee.svg'
import { NavLink } from 'react-router-dom';

export function Header() {
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
            <ShoppingCart size={22} weight="fill"/>
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

 