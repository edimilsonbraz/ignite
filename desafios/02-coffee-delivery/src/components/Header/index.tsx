import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react';

import logoCoffe from '../../assets/loco-coffee.svg'

export function Header() {
  return ( 
    <HeaderContainer>
      <img src={logoCoffe} alt="" />

      <nav>
        <div className='locale'>
          <MapPin size={25} />
          <span>Brasília, DF</span>
        </div>
        <ShoppingCart size={25} />
      </nav>
    </HeaderContainer>
  );
}

 