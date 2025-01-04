import { FC } from "react";
import { CardContainer, MemberName } from "./Card.styles";

interface Props {
    name: string;
    children?: React.ReactNode;
    margin?: string;
    opacity?: string;
}

const Card: FC<Props> = ({ name, margin, opacity, children }) => {
    

    return (
        <CardContainer margin={margin || ''} opacity={opacity || ''}>
            <MemberName>{name}</MemberName>
            {children}
        </CardContainer>
    );
};

export default Card;
