import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export default (props) => {
  const textstyle = props.style;
  if (props.type == "large") {
    return <Text style={styles(textstyle).large}>{props.text}</Text>;
  }else if(props.type == "mediam") {
    return <Text style={styles(textstyle).mediam}>{props.text}</Text>;
  }else if(props.type == "small") {
    return <Text style={styles(textstyle).small}>{props.text}</Text>;
  }else{
    return <Text style={textstyle}>{props.text}</Text>;
  }
};
