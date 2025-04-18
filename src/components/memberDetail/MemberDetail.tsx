import { FC } from "react";
import { MemberDetailName } from "./MemberDetail.styles";
import { useAppDispatch } from "../../hooks/redux";
import { handleOpenMemberDetailPopup } from "../../redux/reducers/memberDetailReducer/MemberDetailSlice";
import Modal from "../shared/modal/Modal";

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <MemberDetailName>
        {"name"}
      </MemberDetailName>
    </Modal>
  );
};
