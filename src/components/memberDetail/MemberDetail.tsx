import React, { FC } from "react";
import { CloseButton, MemberDetailName, ModalContent, ModalOverlay } from "./MemberDetail..styles";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  name: string;
}

export const MemberDetail: FC<Props> = ({ isOpen, onClose, name }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <MemberDetailName>
          {name}
        </MemberDetailName>
      </ModalContent>
    </ModalOverlay>
  );
};
