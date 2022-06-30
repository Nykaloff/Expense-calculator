import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../hooks/redux';

export const Home = () => {
  const {clients} = useAppSelector(state => state.clientsReducer);
  console.log(clients[0]);
  return (
    <View style={styles.container}>
      <Text>{clients[0].name}</Text>
      <Text>{clients[0].telephone}</Text>
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
