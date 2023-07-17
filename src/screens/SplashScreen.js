import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
    const [timePassed, setTimePassed] = useState(false);

    setTimeout(function () {
      setTimePassed(true);
    }, 5000);
  
    if (!timePassed) {
      return (
        <View style={styles.cssContaniner}>
        </View>
      );
    }
    navigation.navigate('SelectlanguageScreen');
    return null;
};

export default SplashScreen;

const styles = StyleSheet.create({
  cssContaniner: {
    flex: 1,
    backgroundColor: 'green',
  },
});
