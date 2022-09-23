import * as React from 'react';
import {Image, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTabParams, RootStackParams} from '../assets/types/NavigationTypes';

import {ClientsScreen} from '../screens/ClientsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CoastScreen} from '../screens/CoastScreen';
import {TotalScreen} from '../screens/TotalScreen';
import {AddNewClientScreen} from '../screens/AddNewClientScreen';
import {ProfileClientScreen} from '../screens/ProfileClientScreen';
import {ProceduresScreen} from '../screens/ProceduresScreen';
import {AddNewProcedureScreen} from '../screens/AddNewProcedureScreen';

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootTab = createBottomTabNavigator<RootTabParams>();

export const ClientsScreenStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen 
      options={{
        headerShown: false }}
        name="ClientsScreenStack" component={ClientsScreen} />
      <RootStack.Screen
      options={{
        headerShown: false }}
        name="AddNewClientScreen"
        component={AddNewClientScreen}
      />
      <RootStack.Screen
      options={{
        headerShown: false }}
        name="ProfileClientScreen"
        component={ProfileClientScreen}
      />
    </RootStack.Navigator>
  );
};

export const ProceduresScreenStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
      options={{
        headerShown: false }}
        name="ProceduresScreenStack"
        component={ProceduresScreen}
      />
      <RootStack.Screen
      options={{
        headerShown: false }}
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
          name="Клиенты"
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
          name="Процедуры"
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
          name="Расходы"
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
          name="Итог"
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
