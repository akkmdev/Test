import React, { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import PinCodeCPN from "../components/PinCodeCPN";
import StyledText from "../components/TextCPN/StyledText";
import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { storeData, getData } from "../../src/config/asyncStorage";
const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const PinScreen = ({ route, navigation }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [getState, setState] = useState(0);
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [themeAccive, setThemeAccive] = useState("UNABLE");

  useEffect(() => {
    console.log("themeAccive",themeAccive);
    if (themeAccive == true) {
      updateTheme({ mode: "light" });
      console.log("DARK",themeAccive);
    } else if (themeAccive == false) {
      console.log("theme",theme.mode);
      updateTheme({ mode: "dark" });
      console.log("LIGHT",themeAccive);
    } else {
      console.log("ElsePIN");
      if(theme.mode == "light"){
        setThemeAccive(true);
      }else{
        setThemeAccive(false);
      }
    }
  }, [themeAccive]);

  useEffect(() => {
    if (route.params.signupvalue == true) {
      setState(2);
    }
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: activeColors.primary,
      }}
    >
      <PinCodeCPN
        setThemeAccive={setThemeAccive}
        signupvalue={route.params.signupvalue}
        getState={getState}
        pin={getState === 0 ? pin : confirmPin}
        setPin={(pinValue) => {
          if (getState === 0) {
            if (pinValue.length === 2) {
              setState(1);
              setPin(pinValue);
            } else {
              setPin(pinValue);
            }
          } else {
            if (pinValue.length === 2) {
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "TouchIDScreen",
                    params: route.params,
                  },
                ],
              });
            } else {
              setConfirmPin(pinValue);
            }
          }
        }}
      />
      {route.params.signupvalue == true ? (
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: (screenH * 3) / 100 }}
        >
          <StyledText
            text={"ลืมรหัส PIN?"}
            style={{ color: activeColors.tint }}
            type={"mediam"}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{ alignItems: "center", marginTop: (screenH * 3) / 100 }}
        />
      )}
    </SafeAreaView>
  );
};

export default PinScreen;
