import * as React from 'react';
import {Image, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../assets/types/NavigationTypes';

import {ClientsScreen} from '../screens/ClientsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CoastScreen} from '../screens/CoastScreen';
import {TotalScreen} from '../screens/TotalScreen';
import {AddNewClientScreen} from '../screens/AddNewClientScreen';
import {ProfileClientScreen} from '../screens/ProfileClientScreen';
import {ProceduresScreen} from '../screens/ProceduresScreen';
import {AddNewProcedureScreen} from '../screens/AddNewProcedureScreen';

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootTab = createBottomTabNavigator<RootStackParams>();

export const ClientsScreenStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="ClientsScreen" component={ClientsScreen} />
      <RootStack.Screen
        name="AddNewClientScreen"
        component={AddNewClientScreen}
      />
      <RootStack.Screen
        name="ProfileClientScreen"
        component={ProfileClientScreen}
      />
    </RootStack.Navigator>
  );
};

export const ProceduresScreenStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="ProceduresScreen" component={ProceduresScreen} />
      <RootStack.Screen
        name="AddNewProcedureScreen"
        component={AddNewProcedureScreen}
      />
    </RootStack.Navigator>
  );
};

export const Navigation = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <RootTab.Navigator>
        <RootTab.Screen
          name="ClientsScreen"
          component={ClientsScreenStackNavigator}
          options={{
            headerShown: false,
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
          name="ProceduresScreen"
          component={ProceduresScreenStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/icons/procedures.png')}
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
