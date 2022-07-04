import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export const AddNewClientScreen = () => {
  const [name, setName] = React.useState('');
  const onChangeName = name => setName(name);

  const [telephone, setTelephone] = React.useState('');
  const onChangeTelephone = telephone => setTelephone(telephone);

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
    </View>
  );
};
