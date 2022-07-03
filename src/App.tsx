import React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from './navigation/Navigation';

import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
