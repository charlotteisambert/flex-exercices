/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {App as MyApp} from './src/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/Navigator';

const App = () => (
  <SafeAreaProvider>
    <Navigator />
  </SafeAreaProvider>
);

export default App;
