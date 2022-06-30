import React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from './navigation/Navigation';

import {store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
