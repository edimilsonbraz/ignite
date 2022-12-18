import expresso from '../assets/coffees/expresso.svg'
import americano from '../assets/coffees/americano.svg'
import expressoCremoso from '../assets/coffees/expresso-cremoso.svg'
import expressoGelado from '../assets/coffees/cafe-gelado.svg'
import cafeComLeite from '../assets/coffees/cafe-com-leite.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mochaccino.svg'
import chocolateQuente from '../assets/coffees/chocolate-quente.svg'
import cubano from '../assets/coffees/cubano.svg'
import havaiano from '../assets/coffees/havaiano.svg'
import arabe from '../assets/coffees/arabe.svg'
import irlandes from '../assets/coffees/irlandes.svg'


export const coffeItem = [
  { 
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imgUrl: `${expresso}`,
    tags: ['Tradicional'],
    price: 6.50
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imgUrl: `${americano}`,
    tags: ['Tradicional'],
    price: 7.90
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imgUrl: `${expressoCremoso}`,
    tags: ['Tracidional'],
    price: 8.90
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imgUrl: `${expressoGelado}`,
    tags: ['Tradicional', 'Gelado'],
    price: 5.50
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imgUrl: `${cafeComLeite}`,
    tags: ['Tradicional', 'Com leite'],
    price: 7.50
  },
  {
    id: 6,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imgUrl: `${latte}`,
    tags: ['Tradicional', 'Com leite'],
    price: 8.90
  },
  {
    id: 7,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    imgUrl: `${capuccino}`,
    tags: ['Tradicional', 'Com leite'],
    price: 8.50
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imgUrl: `${macchiato}`,
    tags: ['Tradicional', 'Com leite'],
    price: 8.90
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imgUrl: `${mocaccino}`,
    tags: ['Tradicional', 'Com Leite'],
    price: 8.90
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imgUrl: `${chocolateQuente}`,
    tags: ['Especial', 'Com Leite'],
    price: 9.90
  },
  {
    id: 11,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imgUrl: `${cubano}`,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.90
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imgUrl: `${havaiano}`,
    tags: ['Especial'],
    price: 9.90
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imgUrl: `${arabe}`,
    tags: ['Especial'],
    price: 9.90
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imgUrl: `${irlandes}`,
    tags: ['Especial', 'Alcoólico'],
    price: 9.90
  }
]
