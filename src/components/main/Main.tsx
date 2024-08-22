import { FC } from "react";
import { MainContainer } from "./Main.styles";
import Card from "../shared/card/Card";

const cards = [{ left: 0, top: 0 }, { left: 100, top: 100 }]

const Main: FC = () => {
    return (
        <MainContainer>
            {cards.map((card, i) => <Card key={i} x={card.left} y={card.top} />)}
        </MainContainer>
    )
}

export default Main