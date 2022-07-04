import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useAppSelector, useAppDispatch} from '../hooks/redux';
import {clientsAction} from '../redux/reducers/clientsSlice';

export const ClientsScreen = ({navigation}: any) => {
  const {clients} = useAppSelector(state => state.clientsReducer);
  const dispatch = useAppDispatch();

  const newClient = {id: 1231, name: 'Dasha', telephone: '77808668'};
  console.log(clients);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('AddNewClientScreen');
        }}
        title="Добавить клиента"></Button>
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
