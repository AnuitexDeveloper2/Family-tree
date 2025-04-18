import styled from 'styled-components';
import { blue, blueDark03, error } from '../../../styles/colors';

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;

`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  box-sizing: border-box;
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${({ hasError }) =>
        hasError
            ? `${error}`
            : `${blueDark03}`};
  
  font-size: 1rem;
  font-weight: 400;
  
  &:focus {
    border-color:  ${blue};
    outline: none;
  }

  &::placeholder {
    color: ${blue}4D; 
  }
`;