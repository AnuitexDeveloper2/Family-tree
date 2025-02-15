import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed; /* Фиксируем относительно экрана */
  top: 0;
  right: 0;
  width: 400px; /* Ширина сайдбара */
  height: 100vh; /* Растягиваем на всю высоту */
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-out forwards;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
