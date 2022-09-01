import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CoastScreenProp} from '../assets/types/NavigationTypes';

export const CoastScreen = ({navigation}: CoastScreenProp) => {
  return (
    <View style={styles.container}>
      <Text>Расходы</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
