import { ChangeEvent, FC } from "react";
import Modal from "../shared/modal/Modal";
import { LoginInputContainer, LoginWrapper, RegisterButton } from "./Login.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeLoginModalState, changeRegisterModalState } from "../../redux/reducers/authReducer/AuthSlice";
import Title from "../shared/title/Title";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";

const Login: FC = () => {

    const selector = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(changeLoginModalState(false))
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

    }

    const goToRegister = () => {
        dispatch(changeLoginModalState(false))
        setTimeout(() => {
            dispatch(changeRegisterModalState(true))
        }, 500)
    }

    return (
        <Modal isOpen={selector.isLoginModalOpen} onClose={closeModal}>
            <LoginWrapper>
                <Title text="Логин" />
                <LoginInputContainer>
                    <Input name="Email" placeholder="эмейл" label="Эмейл" onChange={onChange} />
                </LoginInputContainer>

                <LoginInputContainer>
                    <Input name="password" placeholder="пароль" type="password" label="Пароль" onChange={onChange} />
                </LoginInputContainer>

                <LoginInputContainer>
                    <Button children={'Отправить'} />
                </LoginInputContainer>
                <RegisterButton onClick={goToRegister}>
                    Зарегистрироваться
                </RegisterButton>
            </LoginWrapper>
        </Modal>
    )
}

export default Login