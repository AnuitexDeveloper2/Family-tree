import { ChangeEvent, FC, useState } from "react";
import Modal from "../shared/modal/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeLoginModalState, changeRegisterModalState } from "../../redux/reducers/authReducer/AuthSlice";
import Input from "../shared/input/Input";
import { LoginButton, RegisterInputRow, RegisterInputSubmitRow, RegisterWrapper } from "./Register.styles";
import Title from "../shared/title/Title";
import Button from "../shared/button/Button";
import { RegisterRequest } from "../../redux/actions/auth/types";
import { registerAction } from "../../redux/actions/auth";

const requiredField = 'заполните это поле'
const minPassword = 'пароль должен быть не меньше 6 символов'

const Register: FC = () => {
    const [state, setState] = useState<RegisterRequest>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<RegisterRequest>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const selector = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setErrors({ firstName: '', lastName: '', email: '', password: '' })
        setState({ ...state, [event.currentTarget.name]: event.currentTarget.value })
    }

    const closeModal = () => {
        dispatch(changeRegisterModalState(false))
    }

    const goToLogin = () => {
        dispatch(changeRegisterModalState(false))
        setTimeout(() => {
            dispatch(changeLoginModalState(true));
        }, 500)
    }

    const onSubmit = () => {
        let hasError = false;
        const currentErrors = { ...errors };
        if (!state.firstName) {
            currentErrors.firstName = requiredField;
            hasError = true;
        }
        if (!state.lastName) {
            currentErrors.lastName = requiredField;
            hasError = true;
        }
        if (!state.email) {
            currentErrors.email = requiredField;
            hasError = true;
        }
        if (!state.password) {
            currentErrors.password = requiredField;
            hasError = true;
        }
        if (state.password && state.password.length < 6) {
            currentErrors.password = minPassword
            hasError = true;
        }
        setErrors(currentErrors)
        if (!hasError) {
            dispatch(registerAction(state))
        }
    }

    return (
        <Modal isOpen={selector.isRegisterModalOpen} onClose={closeModal}>
            <RegisterWrapper>
                <Title text="Создать Аккаунт" />
                <RegisterInputRow>
                    <Input name="firstName" placeholder="имя" label="Имя" error={errors.firstName} onChange={onChange} />
                    <Input name="lastName" placeholder="фамилия" label="Фамилия" error={errors.lastName} onChange={onChange} />
                </RegisterInputRow>

                <RegisterInputRow>
                    <Input name="email" placeholder="эмейл" label="Эмейл" error={errors.email} onChange={onChange} />
                    <Input name="password" placeholder="пароль" type="password" label="Пароль" error={errors.password} onChange={onChange} />
                </RegisterInputRow>

                <RegisterInputSubmitRow onClick={onSubmit}>
                    <Button children={'Отправить'} />
                </RegisterInputSubmitRow>

                <LoginButton onClick={goToLogin}>
                    У меня уже есть аккаунт
                </LoginButton>
            </RegisterWrapper>
        </Modal>
    )
}

export default Register