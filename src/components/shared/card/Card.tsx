import React, { FC, useEffect, useRef, useState } from "react";
import { CardContainer, MemberName, Years } from "./Card.styles";
import { useAppDispatch } from "../../../hooks/redux";
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
  const [firstName, surname, lastName] = name.split(" ");
  const [cardId, setCardId] = useState('')
  useEffect(() => {
    const cardId = `${firstName || ''}${lastName || ''}${surname || ''}${years || ''}}`
    setCardId(cardId)
  }, [])
  const dispatch = useAppDispatch()
  const cardRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    const birthYear = years?.split('-')[0]
    dispatch(handleOpenMemberDetailPopup({ id: cardId, data: { firstName, lastName: surname ? lastName : surname, surname, birthYear: birthYear || '' } }));
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
