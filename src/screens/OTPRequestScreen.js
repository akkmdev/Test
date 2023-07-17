import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import StyledText from "../components/TextCPN/StyledText";
import StyledBTN from "../components/ButtonCPN/StyledBTN";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import Components_Topbar from "../components/TopbarCPN/Components_Topbar";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const OTPRequestScreen = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
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
          <View style={{ marginBottom: (screenH * 5) / 100 }}>
            <IconAntDesign
              name={"mobile1"}
              style={{ fontSize: 100, color: activeColors.secondary }}
            />
          </View>
          <View style={{ marginBottom: (screenH * 2) / 100 }}>
            <StyledText
              text={"OTP จะถูกส่งไปที่เบอร์โทรศัพท์"}
              style={{ color: activeColors.tint }}
              type={"large"}
            />
          </View>
          <View style={{ marginBottom: (screenH * 7) / 100 }}>
            <StyledText
              text={"082-XXX-8998"}
              style={{ color: activeColors.secondary }}
              type={"large"}
            />
          </View>
          <View style={{ marginBottom: (screenH * 3) / 100, width: "100%" }}>
            <StyledBTN
              onPress={() => {
                navigation.navigate("OTPScreen", route);
              }}
              navigation={navigation}
              route={route}
              text={"ขอรหัส OTP"}
              style={{}}
            />
          </View>
          <StyledText
            text={"กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX"}
            style={{ color: activeColors.sub, fontSize: 16 }}
            type={"small"}
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
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OTPRequestScreen;
