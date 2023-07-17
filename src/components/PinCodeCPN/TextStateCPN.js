import React from "react";
import StyledText from "../TextCPN/StyledText";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <StyledText
      text={
        props.state === 0
          ? "ตั้งรหัส PIN CODE"
          : props.state === 1
          ? "ยืนยันรหัส PIN CODE"
          : "กรุณากรอกรหัส PIN"
      }
      style={{ color: activeColors.tint }}
      type={"mediam"}
    />
  );
};
