import { StyleSheet} from "react-native";

export const styles = (textstyle) =>
  StyleSheet.create({
    large: {
      fontSize: 20,...textstyle
    },
    mediam: {
      fontSize: 16,...textstyle
    },
    small: {
      fontSize: 14,...textstyle
    },
  });
