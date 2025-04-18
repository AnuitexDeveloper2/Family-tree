import { FC } from "react";
import { InputWrapper, StyledInput, StyledLabel } from "./Input.styles";

interface Props {
    name: string;
    type?: string;
    placeholder?: string;
    validation?: boolean;
    errors?: Record<string, any>;
    isPasswordVisible?: boolean;
    label?: string;
}


const Input: FC<Props> = ({ name, type, placeholder, validation, errors, isPasswordVisible, label }) => {
    return (
        <InputWrapper>
            {label && (
                <StyledLabel htmlFor={name}>
                    {label}
                    {validation && ' *'}
                </StyledLabel>
            )}
            <StyledInput
                hasError={false}
                name={name}
                type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
                placeholder={placeholder}
            />
        </InputWrapper>
    )
}

export default Input