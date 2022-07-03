import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TotalScreen = () => {
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
