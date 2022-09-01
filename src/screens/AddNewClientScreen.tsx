import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddNewClientScreenProp} from '../assets/types/NavigationTypes';

import {useAppDispatch} from '../hooks/redux';
import {clientsAction} from '../redux/reducers/clientsSlice';

export const AddNewClientScreen = ({
  navigation: {goBack},
}: AddNewClientScreenProp) => {
  const dispatch = useAppDispatch();

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const [name, setName] = React.useState('');
  const onChangeName = (name: string) => setName(name);

  const [telephone, setTelephone] = React.useState('');
  const onChangeTelephone = (telephone: string) => setTelephone(telephone);

  const newClient = {
    id: getRandomInt(999999999999),
    name: name,
    telephone: telephone,
  };

  return (
    <View>
      <TextInput
        label="Введите Имя килента"
        value={name}
        onChangeText={onChangeName}
      />
      <TextInput
        label="Введите телефон килента"
        value={telephone}
        onChangeText={onChangeTelephone}
      />
      <Button
        title="Добавить"
        onPress={() => {
          dispatch(clientsAction.addClient(newClient)), goBack();
        }}
      />
      <Button title="Отменить" onPress={() => goBack()} />
    </View>
  );
};
