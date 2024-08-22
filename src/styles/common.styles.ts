import styled from 'styled-components'
import { TextProps } from '../models/styles/types';

export const Text = styled.div<TextProps>`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    line-height: ${props => props.height}px;
    color: ${props => props.color};
    font-family: ${props => props.font};
    width: ${props => (props.width ? `${props.width}px` : 'auto')};
    text-decoration-line: ${props => (props.underline ? 'underline' : 'inherit')};
`;