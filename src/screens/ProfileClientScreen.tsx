import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ProfileClientScreenProp} from '../assets/types/NavigationTypes';

export const ProfileClientScreen = ({
  route,
  navigation,
}: ProfileClientScreenProp) => {
  const {client} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.clientName}>{client.name}</Text>
        <Text style={styles.clientTel}>{client.telephone}</Text>
        <Text style={styles.clientTel}>______________________</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flex: 2,
    backgroundColor: '#0F2027',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2C5364',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  clientName: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  clientTel: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
