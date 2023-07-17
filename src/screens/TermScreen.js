import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";

import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import StyledText from "../components/TextCPN/StyledText";
import StyledBTN from "../components/ButtonCPN/StyledBTN";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import Components_Topbar from "../components/TopbarCPN/Components_Topbar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const TermScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  let androidStatusBarH = StatusBar.currentHeight;
  return (
    <View
      style={[
        styles.cssSafeAreaView,
        {
          height:
            Platform.OS == "android"
              ? ((screenH - androidStatusBarH) * 100) / 100
              : screenH,
          backgroundColor: activeColors.primary,
        },
      ]}
    >
      <Components_Topbar navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={[
            styles.cssCard,
            {
              width: screenW,
              height:
                Platform.OS == "android"
                  ? ((screenH + androidStatusBarH) * 70) / 100
                  : (screenH * 70) / 100,
              backgroundColor: activeColors.tertiary,
              paddingBottom:
                Platform.OS == "android" ? androidStatusBarH : statusBarHeight,
            },
          ]}
        >
          <View style={styles.cssContaniner}>
            <View style={styles.cssContent}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: (screenW * 3) / 100 }}>
                  <IconAntDesign
                    name={"profile"}
                    style={{ fontSize: 30, color: activeColors.secondary }}
                  />
                </View>

                <StyledText
                  text={"เงื่อนไขการใช้บริการ"}
                  style={{ color: activeColors.tint }}
                  type={"large"}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: activeColors.lightsub,
                  marginTop: (screenH * 3) / 100,
                }}
              ></View>

              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <StyledBTN
                  onPress={() => {}}
                  navigation={navigation}
                  route={route}
                  text={"ปฏิเสธ"}
                  style={{ flex: 1, marginRight: (screenW * 2) / 100 }}
                  type={"border"}
                />
                <StyledBTN
                  onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: "LoginScreen",
                          params: route.params,
                        },
                      ],
                    });
                  }}
                  navigation={navigation}
                  route={route}
                  text={"ยอมรับ"}
                  style={{ flex: 1, marginLeft: (screenW * 2) / 100 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cssSafeAreaView: {
    width: screenW,
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
  cssCard: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.0,
    elevation: 5,
  },
});
export default TermScreen;
