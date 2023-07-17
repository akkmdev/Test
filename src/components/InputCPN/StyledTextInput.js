import React from "react";
import { TextInput, View, Platform,Dimensions } from "react-native";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

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
        width: (screenW * 10) / 100,
        height: Platform.OS == "android" ? null : (screenH * 5) / 100,
        ...props.style,
      }}
    >
      <TextInput
        editable={true}
        style={{
          color: props.color,
          fontSize: 40,
          fontFamily: "DB Heavent",
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
          fontSize: 24,
          padding: 5,
          fontFamily: "DB Heavent",
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
