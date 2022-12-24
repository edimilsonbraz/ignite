import styled from 'styled-components';

export const SearchFormContainer = styled.form` 
  

  input {
    width: 100%;
    border-radius: 6px;
    border: 0;
    box-shadow: 0 0 0 1px ${props => props.theme['base-border']};
    background: ${props => props.theme['base-input']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const SearchFormText = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: .75rem;

  span {
    color: ${props => props.theme['base-span']};
  }
`;