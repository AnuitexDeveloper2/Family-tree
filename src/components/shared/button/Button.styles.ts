import styled from 'styled-components';
import { blueDark01 } from '../../../styles/colors';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  border-radius: 0.125rem;
  background: linear-gradient(to left, rgba(94, 219, 250, 1), rgba(7, 104, 239, 1));
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0;
  color: ${blueDark01};
  cursor: pointer;
  border: none;
  font-size: 1rem; 

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background: linear-gradient(to left, rgba(7, 104, 239, 1), rgba(94, 219, 250, 1));
  }
`;