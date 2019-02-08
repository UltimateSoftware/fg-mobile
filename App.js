import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading, Font} from 'expo';
import {createNavigator, SwitchRouter, createSwitchNavigator, getActiveChildNavigationOptions} from '@react-navigation/core'
import {createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, SafeAreaView} from 'react-navigation'
import SignIn from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import FgProfile from './src/pages/FgProfile'
import { Ionicons } from '@expo/vector-icons';
// import { SignedOut, SignedIn } from './src/routers/router'
import AppView from './src/views/AppView'
import { StateProvider } from './State';

class LoadingScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>IM LOADING</Text>
      </SafeAreaView>
    )
  }
}
const LoginNavigator = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp
  }, {
    headerMode: 'none'
  }
)

const AppStack = createBottomTabNavigator(
  {
    profile: FgProfile
  }
)

const AppNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppStack,
  Auth: LoginNavigator,
}, {
  initialRouteName: 'Auth'
});

const App = createAppContainer(AppNavigator)


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
