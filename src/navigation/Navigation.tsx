import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../assets/types/NavigationTypes';

import {Home} from '../screens/Home';

const RootStack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
