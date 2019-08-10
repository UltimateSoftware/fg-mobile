/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {StyleSheet, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

import React, {Component} from 'react';
import MainApp from './src/Router';
import { UserContextProvider } from './src/context/UserContext';

export default class App extends Component {
 render() {
   return (
    <View style={styles.root}>
      <UserContextProvider>
        <MainApp />
      </UserContextProvider>
    </View>
      
   );
 }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingBackgroundStyle: {
    backgroundColor: "rgba(179, 194, 255, 1)",
  },
});
