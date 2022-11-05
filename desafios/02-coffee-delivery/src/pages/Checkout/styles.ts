import styled from "styled-components";

export const ContainerLeft = styled.section ` 
  p:first-child {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  } 

  p:last-child {
    font-size: 0.875rem;
  } 
`;

export const FormContainer = styled.div ` 
  margin-top: 2.5rem;  

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme["base-subtitle"]};
  }

  form {
    display: flex;
    gap: 2rem;
  }
`;

export const InputForm = styled.div ` 
  background: ${props => props.theme["gray-100"]};
  padding: 2.5rem;
  border-radius: 6px;

  svg {
    color: ${props => props.theme["yellow-700"]};
  }
`;

export const InputText = styled.div ` 
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;  
`;

export const InputContent = styled.div ` 
  input {
    font-size: 0.875rem;
    width: 100%;
    height: 2.62rem;
    border: 1px solid ${props => props.theme["gray-300"]};;
    border-radius: 4px;
    padding: 0.875rem;
    background: ${props => props.theme["gray-200"]};

    margin-bottom: 1rem;
  }

  .one {
    width: 40%;
  }

  .three {
    width: calc(40% - 0.75rem);
    margin-right: 0.75rem;
  }

  .four {
    width: 60% ;    
  }

  .five {
    width: calc(40% - 0.75rem);
    margin-right: 0.75rem;
  }

  .six {
    width: calc(50% - 0.75rem);
    margin-right: 0.75rem;
  }

  .seven {
    width: 10%;
  }
`;

export const TypePayment = styled.div `   
  margin-top: 0.75rem;
  background: ${props => props.theme["gray-100"]};
  padding: 2.5rem;
  border-radius: 6px;

  .paymentText {
    display: flex;  
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${props => props.theme["purple-700"]};
    }
  }

  .paymentCart {
    display: flex;
    gap: 0.75rem;

    button {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      font-size: 0.75rem;
      letter-spacing: 0.7px;
      width: 100%;
      text-transform: uppercase;
      background: ${props => props.theme["gray-300"]};
      height: 3.18rem;
      padding: 1rem;
      border: 1px solid transparent;
      border-radius: 6px;
      transition: all 0.1s;

      svg {
        color: ${props => props.theme["purple-500"]};
      }

      :focus {
        border: ${props => props.theme["purple-700"]} !important;
      }

      &:hover {
        background: ${props => props.theme["purple-300"]};
        /* border: 1px solid ${props => props.theme["purple-500"]}; */
        box-shadow: 0 0 0 1px ${props => props.theme['purple-500']};

        //não está funcionando
        :active {
          border: 1px solid ${props => props.theme["purple-500"]};
        }
      }
    }    
  }
`;

export const ContainerRight = styled.section `  
  
`;

export const ContentCart = styled.div ` 
  background: ${props => props.theme["gray-100"]};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
`;

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

export const ItemCartInput = styled.div ` 
  display: flex;

  button {
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

export const TotalItens = styled.div ` 
  p {
    font-size: 0.875rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.875rem;

    .totalPrice {
      font-weight: bold;
    }
  }

  button {
    width: 100%;
    height: 2.875rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .5px;
    border: none;
    border-radius: 6px;
    color: ${props => props.theme.white};
    background: ${props => props.theme["yellow-500"]};

    cursor: pointer;

    transition: all 0.1s;

    &:hover {
      background: ${props => props.theme["yellow-700"]};
    }
  }
`;
