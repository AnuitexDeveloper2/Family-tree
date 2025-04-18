import { FC } from "react";
import Modal from "../shared/modal/Modal";
import { LoginInputContainer, LoginWrapper } from "./Login.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeLoginModalState } from "../../redux/reducers/authReducer/AuthSlice";
import Title from "../shared/title/Title";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";

interface Props {

}

const Login: FC<Props> = ({ }) => {

    const selector = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(changeLoginModalState(false))
    }

    return (
        <Modal isOpen={selector.isLoginModalOpen} onClose={closeModal}>
            <LoginWrapper>
                <Title text="Логин" />
                <LoginInputContainer>
                    <Input name="Email" placeholder="эмейл" label="Эмейл" />
                </LoginInputContainer>

                <LoginInputContainer>
                    <Input name="password" placeholder="пароль" type="password" label="Пароль" />
                </LoginInputContainer>

                <LoginInputContainer>
                    <Button children={'Отправить'} />
                </LoginInputContainer>
            </LoginWrapper>
        </Modal>
    )
}

export default Login