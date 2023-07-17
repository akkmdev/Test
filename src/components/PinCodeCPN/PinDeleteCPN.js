import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import FeatherIcons from "react-native-vector-icons/Feather";
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
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <View
        style={{
          width: sizeButton,
          height: sizeButton,
          borderRadius: sizeButton / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FeatherIcons name="delete" size={30} color={activeColors.sub} />
      </View>
    </TouchableOpacity>
  );
};
