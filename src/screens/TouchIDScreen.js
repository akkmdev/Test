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
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const TouchIDScreen = ({ route, navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [isActive, setIsActive] = useState(theme.mode === "dark");
  const handleSwitch = () => {
    updateTheme();
    setIsActive((previousState) => !previousState);
  };
  return (
    <SafeAreaView style={[styles.cssSafeAreaView]}>
      <View style={styles.cssContaniner}>
        <View style={styles.cssContent}>
          <View style={{ marginBottom: (screenH * 3) / 100 }}>
            <StyledText
              text={"Touch ID"}
              style={{ color: "#000", fontWeight: "bold" }}
              type={"large"}
            />
          </View>

          <StyledText
            text={"ตั้งค่าล็อคอินลายนิ้วมือ\nเพื่อการเข้าถึงที่รวดเร็วขึ้น"}
            style={{ color: "#000" }}
            type={"mediam"}
          />
          <View
            style={{ alignItems: "center", marginTop: (screenH * 15) / 100 }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#FFF",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#888",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2.0,
                elevation: 5,
              }}
            >
              <IconMaterialIcons
                name={"fingerprint"}
                style={{ fontSize: 90, color: "#016650" }}
              />
            </View>
          </View>

          <View style={{ marginTop: (screenH * 20) / 100 }}>
            <StyledBTN
              onPress={() => {}}
              navigation={navigation}
              route={route}
              text={"ตั้งค่าลายนิ้วมือ"}
              style={{ marginBottom: (screenH * 3) / 100 }}
            />
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                let signupvalue = true;
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "PinScreen",
                      params: { signupvalue, ...route.params },
                    },
                  ],
                });
              }}
            >
              <StyledText
                text={"ข้าม"}
                style={{ color: "#000" }}
                type={"mediam"}
              />
            </TouchableOpacity>
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
    marginTop: (screenH * 5) / 100,
  },
});
export default TouchIDScreen;
