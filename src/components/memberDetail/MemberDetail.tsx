import React, { FC } from "react";
import { CloseButton, ModalContent, ModalOverlay } from "./MemberDetail..styles";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const MemberDetail: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        Hello
      </ModalContent>
    </ModalOverlay>
  );
};
