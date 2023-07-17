import React from "react";
import { View, Dimensions, Text, Pressable } from "react-native";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;
const sizeButton = (screenH * 10) / 100;

export default (props) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <Pressable
      onPress={() => {
        props.onPress();
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? activeColors.secondary : "transparent",
          width: sizeButton,
          height: sizeButton,
          borderRadius: sizeButton / 2,
          borderColor: activeColors.accent,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          marginRight: (screenW * 2) / 100,
        },
      ]}
    >
      {({ pressed }) => (
        <View>
          <Text
            style={{
              fontSize: 35,
              color: pressed ? activeColors.primary : activeColors.sub,
            }}
          >
            {props.text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
