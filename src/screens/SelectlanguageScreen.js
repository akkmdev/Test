import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  SafeAreaView,
  Platform,
  useColorScheme,
  Switch,
} from "react-native";

import { colors } from "../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import StyledText from "../components/TextCPN/StyledText";
import StyledBTN from "../components/ButtonCPN/StyledBTN";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const SelectlanguageScreen = ({ route, navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <SafeAreaView
      style={[
        styles.cssSafeAreaView,
        { backgroundColor: activeColors.primary },
      ]}
    >
      <View style={styles.cssContaniner}>
        <View style={styles.cssContent}>
          <StyledText
            text={"ยินดีต้อนรับ"}
            style={{ color: activeColors.tint }}
            type={"large"}
          />
          <StyledText
            text={"กรุณาเลือกภาษา"}
            style={{ color: activeColors.tint }}
            type={"mediam"}
          />

          <View style={{ marginTop: (screenH * 15) / 100 }}>
            <StyledBTN
              onPress={() => {
                
              }}
              navigation={navigation}
              route={route}
              text={"English"}
              style={{ marginBottom: (screenH * 3) / 100 }}
            />
            <StyledBTN
              onPress={() => {
                navigation.navigate("TermScreen", route);
              }}
              navigation={navigation}
              route={route}
              text={"ไทย"}
              style={{}}
            />
          </View>
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
    marginLeft: (screenW * 5) / 100,
    marginRight: (screenW * 5) / 100,
  },
  cssContent: {
    flex: 1,
    justifyContent: "center",
  },
});
export default SelectlanguageScreen;
