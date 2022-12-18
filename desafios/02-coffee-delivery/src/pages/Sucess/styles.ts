import styled from 'styled-components'

export const OrderContainer = styled.section`
  margin-top: 5rem;

  h2 {
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const OrderDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrderDataContent = styled.div`
  padding: 2.5rem 8.25rem 2.5rem 2.5rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;

  margin-top: 2.5rem;
`

export const OrderDataIcons = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.white};

    padding: 0.5rem;
  }

  .primary {
    background: ${(props) => props.theme['yellow-700']};
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
  }
  .secondary {
    background: ${(props) => props.theme['yellow-500']};
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
  }
  .brand {
    background: ${(props) => props.theme['purple-500']};
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
  }
`
