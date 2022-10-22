import { BaseInput, CoffeeContainer, CoffeList, TagContent, ValueCoffeInput } from './styles'

import expresso from '../../assets/coffees/expresso.svg'
import americano from '../../assets/coffees/americano.svg'
import expressoCremoso from '../../assets/coffees/expresso-cremoso.svg'
import expressoGelado from '../../assets/coffees/cafe-gelado.svg'
import cafeComLeite from '../../assets/coffees/cafe-com-leite.svg'
import latte from '../../assets/coffees/latte.svg'
import capuccino from '../../assets/coffees/capuccino.svg'
import macchiato from '../../assets/coffees/macchiato.svg'
import mocaccino from '../../assets/coffees/mochaccino.svg'
import chocolateQuente from '../../assets/coffees/chocolate-quente.svg'
import cubano from '../../assets/coffees/cubano.svg'
import havaiano from '../../assets/coffees/havaiano.svg'
import arabe from '../../assets/coffees/arabe.svg'
import irlandes from '../../assets/coffees/irlandes.svg'

import { ShoppingCart } from 'phosphor-react'


export function CoffeeList() {
  return (
    <CoffeeContainer>
      <h2>Nossos cafés</h2>
      <CoffeList>
        <div className='coffeeCard'>
          <img src={expresso} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
          </TagContent>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={americano} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
          </TagContent>
          <h3>Expresso Americano</h3>
          <p>Expresso diluído, menos intenso que o tradicional</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={expressoCremoso} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
          </TagContent>
          <h3>Expresso Cremoso</h3>
          <p>Café expresso tradicional com espuma cremosa</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={expressoGelado} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>gelado</span>
          </TagContent>
          
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={cafeComLeite} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>com leite</span>
          </TagContent>
          <h3>Café com Leite</h3>
          <p>Meio a meio de expresso tradicional com leite vaporizado</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>        

        <div className='coffeeCard'>
          <img src={latte} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>com leite</span>
          </TagContent>
          <h3>Latte</h3>
          <p>Uma dose de café expresso com o dobro de leite e espuma</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={capuccino} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>com leite</span>
          </TagContent>
          <h3>Capuccino</h3>
          <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={macchiato} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>com leite</span>
          </TagContent>
          <h3>Macchiato</h3>
          <p>Café expresso misturado com um pouco de leite quente e espuma</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={mocaccino} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>com leite</span>
          </TagContent>
          <h3>Mocaccino</h3>
          <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={chocolateQuente} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>tradicional</span>
            <span className='tag'>com leite</span>
          </TagContent>
          <h3>Chocolate Quente</h3>
          <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={cubano} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>especial</span>
            <span className='tag'>alcoólico</span>
            <span className='tag'>gelado</span>
          </TagContent>
          <h3>Cubano</h3>
          <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={havaiano} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>especial</span>
          </TagContent>
          <h3>Havaiano</h3>
          <p>Bebida adocicada preparada com café e leite de coco</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={arabe} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>especial</span>
          </TagContent>
          <h3>Árabe</h3>
          <p>Bebida preparada com grãos de café árabe e especiarias</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>

        <div className='coffeeCard'>
          <img src={irlandes} alt="expresso tradicional" />
          <TagContent>
            <span className='tag'>especial</span>
            <span className='tag'>alcoólico</span>
          </TagContent>
          <h3>Irlandês</h3>
          <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
          <BaseInput>
            R$ <span> 9,90</span> 
            <ValueCoffeInput type="number" min="0" max="100" name="number" id="" />
            <button>
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </BaseInput>
        </div>
      </CoffeList>
    </CoffeeContainer>
  )
}
