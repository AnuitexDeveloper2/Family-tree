import styled, { keyframes } from "styled-components";
import { blueDark01, grayLighter } from "../../styles/colors";

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

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  width: 1400px;
  height: 100%;
  background: #fff;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  background-color: ${grayLighter};
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

export const MemberDetailName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 16px;
  color: ${blueDark01};
  font-family: Proxima N W15 Smbd, Arial, Helvetica Neue, Helvetica, sans-serif !important;
`