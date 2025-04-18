import { FC } from "react";
import { GradientText, HeadingContainer } from "./Title.styles";

interface TitleProps {
    text: string;
  }
  
  const Title: FC<TitleProps> = ({ text }) => {
    return (
      <HeadingContainer>
        <GradientText>{text}</GradientText>
      </HeadingContainer>
    );
  };
  
  export default Title;