import React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from './navigation/Navigation';

import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {Provider as PaperProvider} from 'react-native-paper';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;