import styled from "styled-components";

export const CoffeList = styled.div`
  .coffeeCard {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 1rem 1.25rem;

    background: ${props => props.theme["gray-100"]};
    border-radius: 6px 36px 6px 36px;    

    img {
      width: 7.5rem;
      height: 7.5rem;

      margin-top: -1.25rem;
      margin-bottom: 0.75rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      text-align: center;
      font-size: 0.875rem;
      color: ${props => props.theme["base-label"]};
      line-height: 1.125rem;

      margin-bottom: 2rem;
    }

  }
  
`;

export const TagContainer = styled.div`
  display:flex;
`;

export const TagContent = styled.div`
  background: ${props => props.theme["yellow-300"]};
  color: ${props => props.theme["yellow-700"]};

  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  border-radius: 50px;

  margin-right: 0.5rem;
  margin-bottom: 1rem;

  + div {
    margin-left: 0.25rem;
  }
`;

export const BaseInput = styled.div`  
  display: flex;
  align-items: center;

  .price {
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 0.2rem;
  }

  button {
    border: 0;
    padding: 0.4rem 0.5rem;
    border-radius: 6px;

    cursor: pointer;

    transition: all 0.2s;

    svg {
      color: ${props => props.theme.white};
    }
    
  }

  .buttonCart {
    background: ${props => props.theme["purple-700"]};

    &:hover {
      background: ${props => props.theme["purple-500"]};
    }
  }


`;

export const CoffeeCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 4.5rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  background: ${props => props.theme["gray-300"]};
  text-align: center;

  margin-right: 0.5rem;

  .sinal {
    font-size: 1.5rem;
    color: ${props => props.theme["purple-500"]};
  }
`;

