import { FC } from "react";
import { StyledButton } from "./Button.styles";

interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: FC<Props> = ({ children, disabled, type }) => {
    return (
        <StyledButton
            disabled={disabled}
            type={type}
        >
            {children}
        </StyledButton>
    )
}

export default Button