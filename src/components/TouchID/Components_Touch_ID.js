import React, { useEffect } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import TouchID from "react-native-touch-id";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const screenH = Dimensions.get("screen").height;

const sizeButton = (screenH * 10) / 100;

const Components_Touch_ID = (props) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const optionalConfigObject = {
    title: "Authentication Required",
    imageColor: "#e00606",
    imageErrorColor: "#ff0000",
    sensorDescription: "Touch sensor",
    sensorErrorDescription: "Failed",
    cancelText: "Cancel",
    fallbackLabel: "Show Passcode",
    unifiedErrors: false,
    passcodeFallback: true,
  };

  const CheckPermissionTouchID = () => {
    TouchID.authenticate(
      "to demo this react-native component",
      optionalConfigObject
    )
      .then((success) => {
        console.log("success", success);
      })
      .catch((error) => {
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
          width: sizeButton,
          height: sizeButton,
          borderRadius: sizeButton / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    );
  } else {
    return (
      <View
        style={{
          width: sizeButton,
          height: sizeButton,
          borderRadius: sizeButton / 2,
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
