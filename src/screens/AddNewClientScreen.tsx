import * as React from 'react';
import {View, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

import {useAppDispatch} from '../hooks/redux';
import {clientsAction} from '../redux/reducers/clientsSlice';

export const AddNewClientScreen = ({navigation: {goBack}}: any) => {
  const dispatch = useAppDispatch();

  function getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

  const [name, setName] = React.useState('');
  const onChangeName = (name: any) => setName(name);

  const [telephone, setTelephone] = React.useState('');
  const onChangeTelephone = (telephone: any) => setTelephone(telephone);

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
