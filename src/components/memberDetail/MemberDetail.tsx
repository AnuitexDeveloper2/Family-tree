import React, { FC } from "react";
import { CloseButton, MemberDetailName, ModalContent, ModalOverlay } from "./MemberDetail..styles";
import { useAppDispatch } from "../../hooks/redux";
import { handleOpenMemberDetailPopup } from "../../redux/reducers/memberDetailReducer/MemberDetailSlice";

interface Props {
  isOpen: boolean;
}

export const MemberDetail: FC<Props> = ({ isOpen }) => {
  const dispatch = useAppDispatch()
  if (!isOpen) return null;
  const onClose = () => {
    dispatch(handleOpenMemberDetailPopup(undefined));
  };
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <MemberDetailName>
          {"name"}
        </MemberDetailName>
      </ModalContent>
    </ModalOverlay>
  );
};
