import { StyleSheet} from "react-native";

export const styles = (textstyle) =>
  StyleSheet.create({
    large: {
      fontSize: 30,fontFamily: "DB Heavent Bold",...textstyle
    },
    mediam: {
      fontSize: 26,fontFamily: "DB Heavent",...textstyle
    },
    small: {
      fontSize: 24,fontFamily: "DB Heavent",...textstyle
    },
  });
