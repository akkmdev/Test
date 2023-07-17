import React from "react";
import { TextInput, View } from "react-native";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return props.OTP ? (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: activeColors.accent,
        alignItems: "center",
        justifyContent: "center",
        ...props.style,
      }}
    >
      <TextInput
        editable={true}
        style={{
          color: props.color,
          fontSize: 25,
        }}
        value={props.value}
        maxLength={1}
        keyboardType={"number-pad"}
        autoFocus={props.autoFocus}
        onChangeText={props.onChangeText}
      />
    </View>
  ) : (
    <View
      style={{
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderColor: activeColors.accent,
        ...props.style,
      }}
    >
      <TextInput
        editable={true}
        style={{
          flex: 1,
          color: props.color,
          fontSize: 16,
          padding: 5,
        }}
        onChangeText={(text) => {
          props.onChangeText(text);
        }}
        selectionColor={"#aaa" || "#fff"}
        placeholder={props.placeholder}
        placeholderTextColor={activeColors.sub}
        value={props.value}
        keyboardType={"default"}
        secureTextEntry={props.secureTextEntry || false}
      />
    </View>
  );
};
