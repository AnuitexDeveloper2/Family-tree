import { FC, useEffect, useState } from "react";
import { MemberDetailName, MemberDetailYears } from "./MemberDetail.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { handleOpenMemberDetailPopup } from "../../redux/reducers/memberDetailReducer/MemberDetailSlice";
import Modal from "../shared/modal/Modal";
import { getMemberAction } from "../../redux/actions/member";
import { ActionResponse } from "../../models/actionResponse/types";
import { MemberData } from "../../models/member/types";

interface Props {
  isOpen: boolean;
}

export const MemberDetail: FC<Props> = ({ isOpen }) => {
  const dispatch = useAppDispatch()
  const { memberDetail } = useAppSelector(state => state.memberDetailSlice)
  const [state, setState] = useState<MemberData>({
    id: '',
    firstName: memberDetail?.firstName || '',
    lastName: memberDetail?.lastName || '',
    surname: memberDetail?.surname || '',
    birthYear: memberDetail?.birthYear || '',
  })
  useEffect(() => {
    if (memberDetail) {
      getData()
    }
  }, [memberDetail])

  const getData = async () => {
    const { payload } = await dispatch(getMemberAction({
      firstName: memberDetail?.firstName,
      lastName: memberDetail?.lastName,
      surname: memberDetail?.surname,
      birthYear: memberDetail?.birthYear,
    })) as ActionResponse<any>
    if (payload.data.length > 0) {
      setState(payload.data[0])
    }
  };
  if (!isOpen) return null;
  const onClose = () => {
    dispatch(handleOpenMemberDetailPopup(undefined));
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <MemberDetailName>
        {memberDetail?.firstName} {memberDetail?.lastName} {memberDetail?.surname}
      </MemberDetailName>
      <MemberDetailYears>
        {`${state.birthYear} ${state.deathYear ? `- ${state.deathYear}` : ''}`}
      </MemberDetailYears>
    </Modal>
  );
};
