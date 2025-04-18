import { FC } from "react";
import Modal from "../shared/modal/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeRegisterModalState } from "../../redux/reducers/authReducer/AuthSlice";
import Input from "../shared/input/Input";
import { RegisterInputRow, RegisterWrapper } from "./Register.styles";
import Title from "../shared/title/Title";
import Button from "../shared/button/Button";

const Register: FC = () => {

    const selector = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(changeRegisterModalState(false))
    }

    return (
        <Modal isOpen={selector.isLoginModalOpen} onClose={closeModal}>
            <RegisterWrapper>
                <Title text="Создать Аккаунт" />
                <RegisterInputRow>
                    <Input name="Email" placeholder="эмейл" label="Эмейл" />
                    <Input name="password" placeholder="пароль" type="password" label="Пароль" />
                </RegisterInputRow>

                <RegisterInputRow>
                    <Input name="Email" placeholder="эмейл" label="Эмейл" />
                    <Input name="password" placeholder="пароль" type="password" label="Пароль" />
                </RegisterInputRow>

                <RegisterInputRow>
                    <Button children={'Отправить'} />
                </RegisterInputRow>
            </RegisterWrapper>
        </Modal>
    )
}

export default Register