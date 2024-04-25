import styled from "styled-components";

export const ItemCart = styled.div ` 
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  img {
    width: 4rem;    
  }

  p {
    margin-bottom: .5rem;
  }

  span {
    font-weight: bold;
    text-align: right;
  }

  border-bottom: 1px solid ${props => props.theme["gray-300"]};
  padding-bottom: 1.5rem;

  margin-bottom: 1.5rem;
`;

export const ItemCartInput = styled.div ` 
  display: flex;

  .button-remove {
    display: flex;
    align-items: center;

    color: ${props => props.theme["base-text"]};
    font-weight: normal;
    text-transform: uppercase;
    font-size: 0.75rem;
    border: none;
    border-radius: 6px;
    
    background: ${props => props.theme["gray-300"]};
    padding: 0.5rem;

    cursor: pointer;

    margin-right: 3rem;
  }

  svg {
    color: ${props => props.theme["purple-500"]};
    margin-right: 0.2rem;
  }
`;

export const CoffeeCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 5rem; 
  height: 2.375rem; 
  border: 0;
  border-radius: 6px;
  background: ${props => props.theme["gray-300"]};
  
  margin-right: 0.5rem;

  .sinal {
    font-size: 1.5rem;
    color: ${props => props.theme["purple-500"]};
    cursor: pointer;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;