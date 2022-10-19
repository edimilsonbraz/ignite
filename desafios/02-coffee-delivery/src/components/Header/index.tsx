import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react';

import logoCoffe from '../../assets/loco-coffee.svg'

export function Header() {
  return ( 
    <HeaderContainer>
      <img src={logoCoffe} alt="" />

      <nav>
        <div className='locale'>
          <MapPin size={22} weight="fill"/>
          <span>Brasília, DF</span>
        </div>
        <button>
          <ShoppingCart size={22} weight="fill"/>
        </button>
      </nav>
    </HeaderContainer>
  );
}

 