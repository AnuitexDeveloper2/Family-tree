import styled from 'styled-components'
import { blueDark02, grayDark01 } from '../../../styles/colors';

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["margin"].includes(prop),
}) <{
  margin?: string;
  opacity?: string;
}>`
  position: relative;
  background: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 200px;
  min-width: 200px;
  height: 70px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: ${({ margin }) => margin || "0 20px"};
  opacity: ${({ opacity }) => opacity || 1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
    &:hover {
    animation: blinking-shadow 1s infinite;
  }
  @keyframes blinking-shadow {
    0%, 100% {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    50% {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const MemberName = styled.div`
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
    font-family: 'Proxima Nova', Arial, Helvetica Neue, Helvetica, sans-serif !important;
    color: ${grayDark01};
`;

export const Years = styled.div`
    font-family: Proxima N W15 Smbd, Arial, Helvetica Neue, Helvetica, sans-serif !important;
    letter-spacing: 0.4cap;
    color: ${blueDark02};
    font-family: 'DINNextLTPro-Bold';
`