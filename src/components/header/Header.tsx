import { FC } from "react";
import { HeaderLayout, ImportantDayContainer, UserHeaderSection } from "./Header.styles";
import { CalendarOutlined, UserOutlined } from '@ant-design/icons'
import { blueDark01 } from "../../styles/colors";
import { Text } from '../../styles/common.styles'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeLoginModalState } from "../../redux/reducers/authReducer/AuthSlice";
import Login from "../login/Login";
import Register from "../register/Register";

const Header: FC = () => {
    const selector = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch()

    const goToProfile = () => {

    }

    return (
        <HeaderLayout>
            <UserHeaderSection>
                <ImportantDayContainer>
                    <CalendarOutlined />
                    <Text weight={400} size={14} height={18} color={blueDark01}>
                        Важные даты
                    </Text>
                </ImportantDayContainer>

                {selector.user ?
                    <ImportantDayContainer onClick={() => dispatch(changeLoginModalState(true))}>
                        <Text weight={400} size={14} height={18} color={blueDark01}>
                            <UserOutlined />
                            Войти
                        </Text>
                    </ImportantDayContainer> :
                    <ImportantDayContainer onClick={goToProfile}>
                        <Text weight={400} size={14} height={18} color={blueDark01}>
                            <UserOutlined />
                            {"Профиль"}
                        </Text>
                    </ImportantDayContainer>
                }
            </UserHeaderSection>
            {selector.isLoginModalOpen && <Login />}
            {selector.isRegisterModalOpen && <Register />}
        </HeaderLayout >
    )
}

export default Header