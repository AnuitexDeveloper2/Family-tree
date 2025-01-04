import styled from 'styled-components'

export const CardContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !["margin"].includes(prop),
}) <{
    margin?: string;
    opacity?: string;
}>`
  background: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 120px;
  min-width: 120px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: ${({ margin }) => margin || "0 20px"};
  opacity: ${({ opacity }) => opacity || 1};
`;

export const MemberName = styled.div`
    white-space: nowrap;
    overflow: hidden;
`;