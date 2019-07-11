/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

import React, {Component} from 'react';
import MainApp from './src/Router'
import Loader from "./src/pages/AnimationLoader";
import AppAuth from 'react-native-app-auth';
export default class App extends Component {
  state = {
    appReady: false,
    rootKey: Math.random(),
  };
  componentDidMount() {
    // console.disableYellowBox = true;
    this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random(),
    });

    setTimeout(() => {
      console.log("appReady")
      this.setState({
        appReady: true,
      });
    }, 1000);
  }

  constructor() {
    super();

    this._image = require("./assets/Heart_SVG.png");
  }
 render() {
   return (
    <View key={this.state.rootKey} style={styles.root}>
      <MainApp />
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
