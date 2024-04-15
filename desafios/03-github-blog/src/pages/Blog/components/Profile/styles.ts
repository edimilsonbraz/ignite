import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  margin-top: -6rem;
  margin-bottom: 4.5rem;
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const GitLink = styled.a`
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  transition: 200ms;

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.blue};
  }
`

export const ProfileContent = styled.div`
  p {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    line-height: 25.6px;
    padding-right: 12rem;
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const IconsContent = styled.div`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
