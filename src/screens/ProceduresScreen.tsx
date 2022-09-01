import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../hooks/redux';
import {ListRenderItem} from 'react-native';
import {ProceduresScreenProp} from '../assets/types/NavigationTypes';

export const ProceduresScreen = ({navigation}: ProceduresScreenProp) => {
  const dispatch = useAppDispatch();
  const {procedures} = useAppSelector(state => state.proceduresReducer);

  const backgroundImage = require('../assets/images/background.jpeg');

  const renderItem: ListRenderItem<void> = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddNewProcedureScreen');
        }}></TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.clientsClonatainer}>
          <FlatList
            data={procedures}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewProcedureScreen');
          }}>
          <View style={styles.addNewClient}>
            <Text style={styles.addNewClientText}>Добавить запись</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clientsClonatainer: {
    flex: 1,
  },
  client: {
    backgroundColor: '#0F2027',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2C5364',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  clientName: {
    color: 'white',
    fontSize: 16,
  },
  clientNameI: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  clientTel: {
    color: 'white',
    fontSize: 16,
  },
  clientTelI: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  addNewClient: {
    backgroundColor: '#0F2027',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2C5364',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  addNewClientText: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});
