import React from "react";
import { View } from "react-native";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import { colors } from "../../config/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default (props) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
      }}
    >
      {Array.from({ length: 6 }, (_, i) => null).map((v, i) => {
        return (
          <View
            key={"PinDotCPN" + (i + 1)}
            style={{
              marginLeft: i === 0 ? 0 : 15,
            }}
          >
            <FontAwesomeIcons
              name={props.pin.length < i + 1 ? "circle-thin" : "circle"}
              size={20}
              color={activeColors.secondary}
            />
          </View>
        );
      })}
    </View>
  );
};
