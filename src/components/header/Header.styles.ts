import styled from 'styled-components'
import { grayLight01, teal01 } from '../../styles/colors';

export const HeaderLayout = styled('header')`
    display: flex;
    align-items: center;
    padding: 23px 100px 24px 100px;
    line-height: 18px;
    background-color: ${grayLight01};
    width: 7500px;
    a {
        color: ${teal01};
        &:hover {
            color: #ffffff;
        }
    }
`;

export const ImportantDayContainer = styled('div')`
    display: flex;
    gap: 4px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
            opacity: 1;
        }
`