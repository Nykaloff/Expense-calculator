import * as React from 'react';
import {View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export const AddNewProcedureScreen = ({navigation: {goBack}}: any) => {
  return (
    <View>
      <Calendar
        onDayPress={day => {
          console.log('selected day', day);
          const selectedDay = day;
        }}
        markedDates={{
          selectedDay: {selected: true, marked: true, selectedColor: 'blue'},
        }}
      />
    </View>
  );
};
