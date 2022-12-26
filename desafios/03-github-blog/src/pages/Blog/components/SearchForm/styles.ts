import styled from 'styled-components';

export const SearchFormContainer = styled.form` 
  margin-bottom: 3rem;

  input {
    width: 100%;
    border-radius: 6px;
    border: 0;
    box-shadow: 0 0 0 1px ${props => props.theme['base-border']};
    color: ${props => props.theme['base-text']};
    background: ${props => props.theme['base-input']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme.blue};
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