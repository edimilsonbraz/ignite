import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  // transform: 'translatex(110%)',
  transition: 'all 0.2s ease-in-out',
})

export const ModalTitle = styled(Dialog.Title, {
  fontSize: '$1.25rem',
  fontWeight: 'bold',
  color: '$gray100',
  marginBottom: '3rem',
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: 'none',
  color: '$gray300',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
  cursor: 'pointer',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.8125rem',
  marginBottom: '1.5rem',
})

export const CartProductImage = styled('div', {
  width: '6.312rem',
  height: '5.812rem',
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const CardProductDetails = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  p: {
    fontSize: '1.125rem',
    color: '$gray300',
  },

  strong: {
    fontSize: '1.125rem',
  },

  button: {
    border: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
    background: 'none',
  }
})

export const CartFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    height: '4.312rem',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'no-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    }
  }
})

export const CardFooterDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '1.125rem',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      }
    }
  }
})
