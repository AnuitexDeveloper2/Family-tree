import styled from "styled-components";

export const Container = styled.div<{ scale: number }>`
  transform: ${({ scale }) => `scale(${scale})`};
`;

export const Generation = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin-top: 100px;
  transform-origin: center top;
  transition: transform 0.1s ease-out;
  min-width: 8500px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Line = styled.div`
  position: absolute;
  background-color: black;
`;

export const VerticalLine = styled(Line)`
  width: 2px;
  height: 20px;
`;

export const HorizontalLine = styled(Line)`
  height: 2px;
  z-index: 100;
`;