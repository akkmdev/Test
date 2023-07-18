import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import SelectlanguageScreen from '../screens/SelectlanguageScreen';
import TermScreen from '../screens/TermScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPRequestScreen from '../screens/OTPRequestScreen';
import OTPScreen from '../screens/OTPScreen';
import PinScreen from '../screens/PinScreen';
import TouchIDScreen from '../screens/TouchIDScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Stack.Navigator >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectlanguageScreen"
          component={SelectlanguageScreen}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TermScreen"
          component={TermScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTPRequestScreen"
          component={OTPRequestScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PinScreen"
          component={PinScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TouchIDScreen"
          component={TouchIDScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default App;
