import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  color: 'white',
  cursor: 'pointer',
  transition: '0.3s',

  span: {
    fontWeight: 'bold',
    color: '#333',
    marginRight: 6,
  }, 

  '&:hover': {
    filter: 'brightness(0.8)'
  },

})

export default function Home() {
  return (
    <>
      <Button>
        <span>Teste</span>
        Enviar
      </Button>
    </>
  )
}
