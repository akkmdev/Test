import React from "react";
import { TouchableOpacity } from "react-native";
import StyledText from "../TextCPN/StyledText";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={{
        backgroundColor:
          props.type == "border"
            ? activeColors.tertiary
            : activeColors.secondary,
        width: "100%",
        height: 55,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: props.type == "border" ? 1 : 0,
        borderColor:
          props.type == "border" ? activeColors.secondary : "transparent",
        ...props.style,
      }}
    >
      <StyledText
        text={props.text}
        style={{
          color:
            props.type == "border"
              ? activeColors.secondary
              : activeColors.tertiary,
        }}
        type={"mediam"}
      />
    </TouchableOpacity>
  );
};
