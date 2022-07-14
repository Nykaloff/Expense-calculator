import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

export const AddNewProcedureScreen = ({navigation: {goBack}}: any) => {
  const DatePickerModal = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    console.log(typeof date);
    console.log(Object.values(date));
    console.log(date);
    console.log(Date());

    const datePick = date.toString();

    return (
      <View>
        <View>
          <Button title="Выбрать дату" onPress={() => setOpen(true)} />
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
        <Text>Дата: {datePick}</Text>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Text>Имя выбранного клиента</Text>
        <Text>Дата </Text>
      </View>
      <View>
        <Text>Выбери клиента</Text>
      </View>
      <View>
        <DatePickerModal />
      </View>
    </View>
  );
};
