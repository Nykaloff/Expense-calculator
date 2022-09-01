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
import {ICleint} from '../assets/types/ClientsTypes';
import {ListRenderItem} from 'react-native';
import {ClientsScreenProp} from '../assets/types/NavigationTypes';

export const ClientsScreen = ({navigation}: ClientsScreenProp) => {
  const {clients} = useAppSelector(state => state.clientsReducer);
  const dispatch = useAppDispatch();

  const backgroundImage = require('../assets/images/background.jpeg');

  const renderItem: ListRenderItem<ICleint> = ({item}: {item: ICleint}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfileClientScreen', {
            client: item,
          });
        }}>
        <View style={styles.client}>
          <Text style={styles.clientName}>
            Имя: <Text style={styles.clientNameI}>{item.name}</Text>
          </Text>
          <Text style={styles.clientTel}>
            Телефон: <Text style={styles.clientTelI}>{item.telephone}</Text>
          </Text>
        </View>
      </TouchableOpacity>
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
            data={clients}
            keyExtractor={(item: ICleint) => item.id}
            renderItem={renderItem}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewClientScreen');
          }}>
          <View style={styles.addNewClient}>
            <Text style={styles.addNewClientText}>Добавить клиента</Text>
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
