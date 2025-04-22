import styled from "styled-components";
import { InvisibleButton } from "../../styles/common.styles";
import { black } from "../../styles/colors";

export const RegisterWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const RegisterInputRow = styled('div')`
    display: flex;
    gap: 8px;
`
export const RegisterInputSubmitRow = styled('div')`
    width: 200px;
`
export const LoginButton = styled(InvisibleButton)`
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    color: ${black};
`