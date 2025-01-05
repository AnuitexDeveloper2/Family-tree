import { FC } from "react";
import { CardContainer, MemberName, Years } from "./Card.styles";

interface Props {
    name: string;
    children?: React.ReactNode;
    margin?: string;
    opacity?: string;
    years?: string;
}

const Card: FC<Props> = ({ name, margin, opacity, years, children }) => {
    const [firstName, lastName, surname] = name.split(' ')

    return (
        <CardContainer margin={margin || ''} opacity={opacity || ''}>
            <MemberName>{firstName}</MemberName>
            <MemberName>{`${lastName || ''} ${surname || ''}`}</MemberName>
            {children}
            <Years>{years}</Years>
        </CardContainer>
    );
};

export default Card;
