import styled from 'styled-components';
import { greenLight } from '../../styles/colors';
import { InvisibleButton } from '../../styles/common.styles';

export const AlertsWrapper = styled.div`
  position: absolute;
`;

export const AlertContainer = styled.div`
  position: fixed;
  top: 8.375rem;
  right: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
`;

export const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const AlertBox = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;
  &.bg-green-dark {
    background-color: ${greenLight};
  }
  &.bg-red {
    background-color: red;
  }
  &.bg-yellow {
    background-color: yellow;
  }
`;

export const CloseButton = styled(InvisibleButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #4a5568;
  font-size: 16px;
  &:hover {
    color: #2d3748;
  }
`;