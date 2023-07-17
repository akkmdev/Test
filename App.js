import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import SplashScreen from "react-native-splash-screen";

import { ThemeContext } from "./src/contexts/ThemeContext";
import { storeData, getData } from "./src/config/asyncStorage";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const App = () => {
  const [theme, setTheme] = useState({ mode: "light" });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode };
      setTheme(newTheme);
      storeData("Theme", newTheme);
    } else {
      if (newTheme == false) {
        setTheme({ mode: "light" });
        storeData("Theme", { mode: "light" });
      } else if (newTheme == true) {
        setTheme({ mode: "dark" });
        storeData("Theme", { mode: "dark" });
      } else {
        setTheme(newTheme);
        storeData("Theme", newTheme);
      }
    }
  };

  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("Theme");
      if (themeData) {
        updateTheme(themeData);
      } else {
        console.log("test");
      }
    } catch ({ message }) {
      console.log("message", message);
    }
  };

  useEffect(() => {
    fetchStoredTheme();
    SplashScreen.hide();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewCSS: {
    width: screenW,
    height: screenH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default App;
