import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import StyledText from "../components/TextCPN/StyledText";
import Components_Topbar from "../components/TopbarCPN/Components_Topbar";
import OTPCPN from "../components/OTPForm/OTPCPM";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const OTPScreen = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const [otp, set_otp] = useState("");
  const [countDown, set_countDown] = useState(60);

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  useEffect(() => {
    if (countDown !== 60 && countDown !== 0) {
      timeout(1000);
      set_countDown(countDown - 1);
    }
    if (countDown === 0) {
      set_countDown(60);
    }
  }, [countDown]);

  return (
    <View
      style={[
        styles.cssSafeAreaView,
        { backgroundColor: activeColors.primary },
      ]}
    >
      <Components_Topbar navigation={navigation} />
      <View style={styles.cssContaniner}>
        <View style={styles.cssContent}>
          <View style={{ marginBottom: (screenH * 2) / 100 }}>
            <StyledText
              text={"ยืนยันตัวตน"}
              style={{ color: activeColors.tint }}
              type={"large"}
            />
          </View>
          <View style={{ marginBottom: (screenH * 1) / 100 }}>
            <StyledText
              text={"กรุณากรอกรหัสยืนยันที่เราส่งให้คุณ"}
              style={{ color: activeColors.sub }}
              type={"mediam"}
            />
          </View>
          <View style={{ marginBottom: (screenH * 7) / 100 }}>
            <StyledText
              text={"082-XXX-8998"}
              style={{ color: activeColors.sub }}
              type={"mediam"}
            />
          </View>
          <OTPCPN
            otp={otp}
            resend={() => {
              set_countDown(60);
              onresend();
            }}
            countdown={countDown}
            route={route}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cssSafeAreaView: {
    width: screenW,
    height: screenH,
  },
  cssContaniner: {
    flex: 1,
    paddingLeft: (screenW * 5) / 100,
    paddingRight: (screenW * 5) / 100,
  },
  cssContent: {
    flex: 1,
    marginTop: (screenH * 2) / 100,
  },
});
export default OTPScreen;
