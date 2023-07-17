import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  BackHandler,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import TouchID from "react-native-touch-id";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const screenH = Dimensions.get("screen").height;

const sizButtone = (screenH * 10) / 100;

const Components_Touch_ID = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const optionalConfigObject = {
    title: "Authentication Required", // Android
    imageColor: "#e00606", // Android
    imageErrorColor: "#ff0000", // Android
    sensorDescription: "Touch sensor", // Android
    sensorErrorDescription: "Failed", // Android
    cancelText: "Cancel", // Android
    fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const CheckPermissionTouchID = () => {
    TouchID.authenticate(
      "to demo this react-native component",
      optionalConfigObject
    )
      .then((success) => {
        // Success code
        console.log("success", success);
      })
      .catch((error) => {
        // Failure code
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (props.onsignup == true) {
      CheckPermissionTouchID();
    }
  }, []);

  if (props.onsignup == false) {
    return (
      <View
        style={{
          width: sizButtone,
          height: sizButtone,
          borderRadius: sizButtone / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    );
  } else {
    return (
      <View
        style={{
          width: sizButtone,
          height: sizButtone,
          borderRadius: sizButtone / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.onsignup == true ? (
          <TouchableOpacity
            onPress={() => {
              CheckPermissionTouchID();
            }}
          >
            <IconMaterialIcons
              name={"fingerprint"}
              style={{ fontSize: 40, color: activeColors.sub }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    );
  }
};
export default Components_Touch_ID;
