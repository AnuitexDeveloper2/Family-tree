import React, { FC } from "react";
import { CloseButton, ModalContent, ModalOverlay } from "./MemberDetail..styles";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const MemberDetail: FC<Props> = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        style={{ position: "absolute", top: position.top, left: position.left }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        Hello
      </ModalContent>
    </ModalOverlay>
  );
};
