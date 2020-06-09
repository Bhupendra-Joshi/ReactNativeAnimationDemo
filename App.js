/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
if (__DEV__) {
  import('./src/config/ReactotronConfig')
}

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import CarousalScreen from './src/screens/CarousalScreen';
import Contacts from './src/screens/Contacts';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <CarousalScreen /> */}
        <Contacts />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
