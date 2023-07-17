import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

export default (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View
      style={{
        width: "100%",
        height: (screenH * 6) / 100,
        marginTop: statusBarHeight,
        justifyContent: "center",
        paddingLeft: (screenW * 5) / 100,
        paddingRight: (screenW * 5) / 100,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{ marginRight: (screenW * 3) / 100 }}
      >
        <IconAntDesign
          name={"arrowleft"}
          style={{ fontSize: 25, color: activeColors.tint }}
        />
      </TouchableOpacity>
    </View>
  );
};
