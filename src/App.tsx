import React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from './navigation/Navigation';
import {useColorScheme} from 'react-native';

import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

const App: React.FC = () => {
  const darkTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1A1A1A',
      accent: '#FAFAFA',
    },
  };

  const lightTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FAFAFA',
      accent: '#1A1A1A',
    },
  };
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
