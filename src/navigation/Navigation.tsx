import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../assets/types/NavigationTypes';

import {ClientsScreen} from '../screens/ClientsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CoastScreen} from '../screens/CoastScreen';
import {TotalScreen} from '../screens/TotalScreen';

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootTab = createBottomTabNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator>
        <RootTab.Screen
          name="ClientsScreen"
          component={ClientsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/icons/clients.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#eb9234' : '#030100',
                  }}
                />
              </View>
            ),
          }}
        />
        <RootTab.Screen
          name="CoastScreen"
          component={CoastScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/icons/coasts.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#eb9234' : '#030100',
                  }}
                />
              </View>
            ),
          }}
        />
        <RootTab.Screen
          name="TotalScreen"
          component={TotalScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/icons/total.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#eb9234' : '#030100',
                  }}
                />
              </View>
            ),
          }}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  );
};
