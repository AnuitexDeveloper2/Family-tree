import styled from "styled-components";
import { InvisibleButton } from "../../styles/common.styles";
import { black } from "../../styles/colors";

export const LoginWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const LoginInputContainer = styled('div')`
    width: 300px;
    margin-bottom: 20px;
`

export const RegisterButton = styled(InvisibleButton)`
    display: flex;
    justify-content: flex-end;
    color: ${black};
`