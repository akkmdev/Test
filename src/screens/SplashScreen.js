import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SplashScreen = ({ navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [nav, setNav] = useState(false);
  setTimeout(() => {
    setNav(true);
  }, 3000);

  useEffect(() => {
    if (nav == true) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "SelectlanguageScreen",
          },
        ],
      });
    }
  }, [nav]);

  return (
    <View style={{ flex: 1, backgroundColor: activeColors.secondary }}></View>
  );
};

export default SplashScreen;
