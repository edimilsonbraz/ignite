import styled from "styled-components";
import backgroundImg from '../../assets/banner-head.png'

export const HeaderContainer = styled.header` 
  background: ${() => `url(${backgroundImg}) no-repeat`};
  background-size: cover;
  width: 100%;
  height: 18.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

`;


