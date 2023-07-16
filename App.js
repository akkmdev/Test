import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const screenW = Dimensions.get('screen').width;
const screenH = Dimensions.get('screen').height;

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewCSS}>
      <Text>
        Hello!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewCSS: {
    width:screenW,
    height:screenH,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red'
  },
});

export default App;
