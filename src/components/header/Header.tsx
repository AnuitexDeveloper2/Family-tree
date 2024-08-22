import { FC } from "react";
import { HeaderLayout, ImportantDayContainer } from "./Header.styles";
import { CalendarOutlined } from '@ant-design/icons'
import { blueDark01 } from "../../styles/colors";
import { Text } from '../../styles/common.styles'

const Header: FC = () => {
    return (
        <HeaderLayout>
            <ImportantDayContainer>
                <CalendarOutlined />
                <Text weight={400} size={14} height={18} color={blueDark01}>
                    Важные даты
                </Text>
            </ImportantDayContainer>
        </HeaderLayout>
    )
}

export default Header