import React, { FC, useRef } from "react";
import { CardContainer, MemberName, Years } from "./Card.styles";
import { MemberDetail } from "../../memberDetail/MemberDetail";
import { useModalState } from "../../../hooks/useModalState/useModalState";

interface Props {
  name: string;
  children?: React.ReactNode;
  margin?: string;
  opacity?: string;
  years?: string;
}

const Card: FC<Props> = ({ name, margin, opacity, years, children }) => {
  const [firstName, lastName, surname] = name.split(" ");
  const { isOpen, onOpen, onClose } = useModalState();
  const cardRef = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = React.useState({ top: 0, left: 0 });

  const handleOpen = () => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setModalPosition({ top: rect.top, left: rect.left });
    }
    onOpen();
  };

  return (
    <>
      <CardContainer
        ref={cardRef}
        margin={margin || ""}
        opacity={opacity || ""}
        onClick={handleOpen}
      >
        <MemberName>{firstName}</MemberName>
        <MemberName>{`${lastName || ""} ${surname || ""}`}</MemberName>
        {children}
        <Years>{years}</Years>
      </CardContainer>
      {isOpen && (
        <MemberDetail
          isOpen={isOpen}
          onClose={onClose}
          position={modalPosition}
        />
      )}
    </>
  );
};

export default Card;
