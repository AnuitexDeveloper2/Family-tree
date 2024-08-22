import { FC, useRef, useState } from "react";
import { CardBody, CardContainer, CardHeader } from "./Card.styles";

interface Props {
    x: number,
    y: number
}
const Card: FC<Props> = ({ x, y }) => {

    const [position, setPosition] = useState<{ x: number, y: number }>({ x, y })
    let mouseStartPos = { x: 0, y: 0 }
    const cardRef = useRef<HTMLDivElement | null>(null)
    const mouseDown = (e: any) => {
        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)

    }

    const mouseMove = (e: any) => {
        const mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY
        }

        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY
        setPosition({
            x: (cardRef.current?.offsetLeft || 0) - mouseMoveDir.x,
            y: (cardRef.current?.offsetTop || 0) - mouseMoveDir.y
        })
        
    }

    const mouseUp = (e: any) => {
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
    }

    return (
        <CardContainer ref={cardRef} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <CardHeader onMouseDown={mouseDown}>
            </CardHeader>
            <CardBody>
                Text
            </CardBody>
        </CardContainer>
    )
}
export default Card