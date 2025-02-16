import React, { FC, useEffect, useRef, useState } from "react";
import { CardContainer, MemberName, Years } from "./Card.styles";
import { MemberDetail } from "../../memberDetail/MemberDetail";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { v4 as uuidv4 } from 'uuid';
import { handleOpenMemberDetailPopup } from "../../../redux/reducers/memberDetailReducer/MemberDetailSlice";

interface Props {
  name: string;
  children?: React.ReactNode;
  margin?: string;
  opacity?: string;
  years?: string;
  id?: string
}

const Card: FC<Props> = ({ name, margin, opacity, years, id, children }) => {
  const [firstName, lastName, surname] = name.split(" ");
  const { cardModalId } = useAppSelector(state => state.memberDetailSlice)
  const [cardId, setCardId] = useState('')
  useEffect(() => {
    setCardId(uuidv4())
  }, [])
  const dispatch = useAppDispatch()
  const cardRef = useRef<HTMLDivElement>(null);
  const [, setModalPosition] = React.useState({ top: 0, left: 0 });
  const handleOpen = () => {
    dispatch(handleOpenMemberDetailPopup(cardId));
  };

  return (
    <>
      <CardContainer
        ref={cardRef}
        margin={margin || ""}
        opacity={opacity || ""}
        onClick={handleOpen}
        id={id}
      >
        <MemberName>{firstName}</MemberName>
        <MemberName>{`${lastName || ""} ${surname || ""}`}</MemberName>
        {children}
        <Years>{years}</Years>
      </CardContainer>
    </>
  );
};

export default Card;
