import { ChangeEvent, FC } from "react";
import { ErrorMessage, InputWrapper, StyledInput, StyledLabel } from "./Input.styles";

interface Props {
    name: string;
    type?: string;
    placeholder?: string;
    validation?: boolean;
    error?: string;
    isPasswordVisible?: boolean;
    label?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const Input: FC<Props> = ({ name, type, placeholder, validation, error, isPasswordVisible, label, onChange }) => {
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
                onChange={onChange}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    )
}

export default Input