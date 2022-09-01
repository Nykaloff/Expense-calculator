import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TotalScreenProp} from '../assets/types/NavigationTypes';

export const TotalScreen = ({navigation}: TotalScreenProp) => {
  return (
    <View style={styles.container}>
      <Text>Итог</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
