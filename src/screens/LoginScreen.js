import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";

import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import StyledText from "../components/TextCPN/StyledText";
import StyledBTN from "../components/ButtonCPN/StyledBTN";
import StyledTextInput from "../components/InputCPN/StyledTextInput";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const LoginScreen = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={[
        styles.cssSafeAreaView,
        { backgroundColor: activeColors.primary },
      ]}
    >
      <View style={styles.cssContaniner}>
        <View style={styles.cssContent}>
          <View
            style={{
              marginBottom: (screenH * 5) / 100,
              marginTop: (screenH * 30) / 100,
            }}
          >
            <StyledTextInput
              style={{ marginBottom: (screenH * 5) / 100 }}
              onChangeText={(val) => {
                setUsername(val);
              }}
              color={activeColors.tint}
              placeholder={"ชื่อผู้ใช้งาน"}
              value={username}
              secureTextEntry={""}
            />
            <StyledTextInput
              style={{ marginBottom: (screenH * 4) / 100 }}
              onChangeText={(val) => {
                setPassword(val);
              }}
              color={activeColors.tint}
              placeholder={"รหัสผ่าน"}
              value={password}
              secureTextEntry={true}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: activeColors.tertiary,
                    borderColor: activeColors.lightsub,
                    borderRadius: 5,
                    borderWidth: 1,
                    marginRight: (screenW * 2) / 100,
                  }}
                ></TouchableOpacity>
                <StyledText
                  text={"บันทึกการเข้าสู่ระบบ"}
                  style={{ color: activeColors.sub }}
                  type={"small"}
                />
              </View>
              <TouchableOpacity onPress={() => {}} style={{}}>
                <StyledText
                  text={"ลืมรหัสผ่าน?"}
                  style={{ color: activeColors.sub }}
                  type={"small"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <StyledBTN
            onPress={() => {
              navigation.navigate("OTPRequestScreen", route);
            }}
            navigation={navigation}
            route={route}
            text={"เข้าสู่ระบบ"}
            style={{ marginBottom: (screenH * 3) / 100 }}
          />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderTopWidth: 1,
                borderColor: activeColors.accent,
                flex: 1,
              }}
            />
            <View
              style={{
                marginLeft: (screenW * 2) / 100,
                marginRight: (screenW * 2) / 100,
              }}
            >
              <StyledText
                text={"ไม่มีบัญชีผู้ใช้"}
                style={{ color: activeColors.accent }}
                type={"small"}
              />
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: activeColors.accent,
                flex: 1,
              }}
            />
          </View>
          <StyledBTN
            onPress={() => {}}
            navigation={navigation}
            route={route}
            text={"เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้"}
            style={{ marginTop: (screenH * 3) / 100 }}
            type={"border"}
          />
        </View>
      </View>
    </SafeAreaView>
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
    marginTop: (screenH * 3) / 100,
  },
});
export default LoginScreen;
