import styled from "styled-components";

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

  p:first-child {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  p:last-child {
    font-size: 0.875rem;
  }
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

`;

export const ContainerLeft = styled.section ` 
  
  
  
`;

export const ContainerRight = styled.section ` 
  
  

  
`;

export const ContentCart = styled.div ` 
  background: ${props => props.theme["gray-100"]};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
`;