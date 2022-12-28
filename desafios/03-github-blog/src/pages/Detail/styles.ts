import styled from 'styled-components';

export const PostInfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  margin-top: -6rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.875rem;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.25rem;
`

export const HeaderLinksIcons = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  transition: .4s;
  cursor: pointer;

  &:hover::after {
    position: absolute;
    bottom: -2px;
    content: '';
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.blue};
  }

  span {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.85rem;
  }

  
`

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`