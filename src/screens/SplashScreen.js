import React from "react";
import { View, Image } from "react-native";
import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SplashScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  setTimeout(() => {
    navigation.navigate("SelectlanguageScreen");
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme.mode == "dark" ? activeColors.primary : activeColors.secondary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {theme.mode == "dark" ? (
        <Image
          style={{ width: 400, height: 400 }}
          source={require("../../assets/image/iconapp.png")}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default SplashScreen;
