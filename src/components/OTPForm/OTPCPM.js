import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Easing,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import StyledTextInput from "../InputCPN/StyledTextInput";
import StyledText from "../TextCPN/StyledText";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const OTPCPN = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [counter, setCounter] = useState(60);
  const [reotp, setResotp] = useState(false);
  const [pin1, setPin1] = useState("1");
  const [pin2, setPin2] = useState("8");
  const [pin3, setPin3] = useState("9");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setResotp(true);
    } else {
      setResotp(false);
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: "PinScreen",
              params: props.route.params,
            },
          ],
        });
      }}
      accessible={false}
    >
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: (screenH * 15) / 100,
          }}
        >
          <StyledTextInput
            style={{ width: (screenW * 10) / 100, height: (screenH * 5) / 100 }}
            color={activeColors.tint}
            value={pin1}
            maxLength={1}
            OTP={true}
            autoFocus={true}
            onChangeText={(val) => {
              setPin1(val);
            }}
          />

          <StyledTextInput
            style={{ width: (screenW * 10) / 100, height: (screenH * 5) / 100 }}
            color={activeColors.tint}
            value={pin2}
            maxLength={1}
            OTP={true}
            autoFocus={true}
            onChangeText={(val) => {
              setPin2(val);
            }}
          />

          <StyledTextInput
            style={{ width: (screenW * 10) / 100, height: (screenH * 5) / 100 }}
            color={activeColors.tint}
            value={pin3}
            maxLength={1}
            OTP={true}
            autoFocus={true}
            onChangeText={(val) => {
              setPin3(val);
            }}
            onPressOut={true}
          />

          <StyledTextInput
            style={{ width: (screenW * 10) / 100, height: (screenH * 5) / 100 }}
            color={activeColors.tint}
            value={pin4}
            maxLength={1}
            OTP={true}
            autoFocus={false}
            onChangeText={(val) => {
              setPin4(val);
            }}
          />

          <StyledTextInput
            style={{ width: (screenW * 10) / 100, height: (screenH * 5) / 100 }}
            color={activeColors.tint}
            value={pin5}
            maxLength={1}
            OTP={true}
            autoFocus={false}
            onChangeText={(val) => {
              setPin5(val);
            }}
          />

          <StyledTextInput
            style={{ width: (screenW * 10) / 100, height: (screenH * 5) / 100 }}
            color={activeColors.tint}
            value={pin6}
            maxLength={1}
            OTP={true}
            autoFocus={false}
            onChangeText={(val) => {
              setPin6(val);
            }}
          />
        </View>
        <View style={{ marginVertical: 10, alignItems: "center" }}>
          <View style={{ marginBottom: (screenH * 3) / 100 }}>
            <StyledText
              text={"หากคุณไม่ได้รับรหัส?"}
              style={{ color: activeColors.sub }}
              type={"mediam"}
            />
          </View>

          {reotp == true ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setCounter(60);
                }}
              >
                <StyledText
                  text={
                    "ส่งรหัสใหม่" +
                    "(" +
                    (counter % 60 < 10 == 1
                      ? Math.floor(counter % 60)
                      : Math.floor(counter % 60) + " ") +
                    ")"
                  }
                  style={{ color: activeColors.tint, fontWeight: "bold" }}
                  type={"mediam"}
                />
              </TouchableOpacity>
            </>
          ) : (
            <StyledText
              text={
                "ส่งรหัสใหม่" +
                "(" +
                (counter % 60 < 10 == 1
                  ? Math.floor(counter % 60)
                  : Math.floor(counter % 60) + " ") +
                ")"
              }
              style={{ color: activeColors.tint, fontWeight: "bold" }}
              type={"mediam"}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OTPCPN;

const styles = StyleSheet.create({
  cssPanelView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  cssPanelLoading: {
    width: (screenW * 40) / 100,
    height: (screenW * 40) / 100,
    backgroundColor: "rgba(85, 85, 85, 0.2)",
    borderRadius: (screenW * 40) / 100 / 2,
    alignItems: "center",
  },
  input: {
    margin: 7,
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 34,
    color: "#000",
    textAlign: "center",
  },
  inputtext: {
    fontSize: 30,
    color: "#000",
    alignSelf: "flex-start",
  },
  cssfontcountdown: {
    fontSize: 20,
    color: "#000",
  },
  csslink: {
    fontSize: 22,
    color: "#000",
  },
});
