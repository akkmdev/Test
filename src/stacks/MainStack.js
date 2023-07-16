import React from 'react';
import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react';

import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default App;
