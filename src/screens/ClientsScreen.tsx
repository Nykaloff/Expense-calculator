import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAppSelector} from '../hooks/redux';

export const ClientsScreen = () => {
  const {clients} = useAppSelector(state => state.clientsReducer);
  return (
    <View style={styles.container}>
      <View>
        <Text>{clients[0].name}</Text>
        <Text>{clients[0].telephone}</Text>
      </View>
      <Text>{clients[1].name}</Text>
      <Text>{clients[1].telephone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clientsClonatainer: {
    flex: 1,
    alignItems: 'center',
    width: '80%',
    height: '10%',
    backgroundColor: '#ffdfee',
  },
});
