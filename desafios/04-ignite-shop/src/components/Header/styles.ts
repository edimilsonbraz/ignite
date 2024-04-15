import { styled } from "../../styles"

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1190,
  margin: '0 auto'
})

export const Cart = styled('div', {
  position: 'relative',
  width: 48,
  height: 48,
  padding: '0.75rem',
  borderRadius: 6,
  background: '$gray800',
  cursor: 'pointer',

  span: {
    position: 'absolute',
    top: -8,
    right: -8,
    fontSize: '0.875rem',
    background: '$green500',
    width: 22,
    height: 22,
    borderRadius: 999,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})