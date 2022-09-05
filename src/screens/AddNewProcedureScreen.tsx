import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native-paper';
import {AddNewProcedureScreenProp} from '../assets/types/NavigationTypes';

import {INewProcedure} from '../assets/types/NewProcedure';

export const AddNewProcedureScreen = ({
  navigation: {goBack},
}: AddNewProcedureScreenProp) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [nameProcedure, setNameProcedure] = useState<string>('');
  const onChangenNameProcedure = (nameProcedure: string) =>
    setNameProcedure(nameProcedure);

  const datePick = date.toString();

  const newProcedure: INewProcedure = {
    date: datePick,
    nameProcedure: nameProcedure,
    client: {id: null, name: '', telephone: ''},
  };

  return (
    <View>
      <View>
        <Text>{datePick}</Text>
        <Text>{nameProcedure}</Text>
      </View>
      <View>
        <Button title="Выбрать дату" onPress={() => setOpen(true)} />
      </View>
      <View>
        <TextInput
          label="Введите название процедур через запятую"
          value={nameProcedure}
          onChangeText={onChangenNameProcedure}
        />
      </View>
      <DatePicker
        theme="light"
        androidVariant="iosClone"
        mode="date"
        locale="ru"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
