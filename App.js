import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading, Font} from 'expo';
import {createNavigator, SwitchRouter, createSwitchNavigator, getActiveChildNavigationOptions} from '@react-navigation/core'
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import SignIn from './src/pages/Login'
import SignUp from './src/pages/SignUp'
// import { SignedOut, SignedIn } from './src/routers/router'
import AppView from './src/views/AppView'
import { StateProvider } from './State';

const RootNavigator = createNavigator(
  AppView,
  SwitchRouter({
    SignIn,
    SignUp
  }), {
    navigationOptions: ({ navigation, screenProps }) => {
      const options = getActiveChildNavigationOptions(navigation, screenProps);
      return { title: options.title };
    }
  }
)
RootNavigator.path='root'


const App = createAppContainer(RootNavigator)
// const App = () => {
//   useEffect(() => {
//     (
//       async () => {
//         await Font.loadAsync({
//           'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
//           'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
//           'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
//           'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
//           'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//           'Ionicons' : require("@expo/vector-icons/fonts/Ionicons.ttf")});
//       }
//     )();
//   })

//   return (
//     <View style={styles.container}>
//       {/* <SignedOut /> */}
//     </View>
//   );
// }

export default App;
// export default class App extends React.Component {
  
//   constructor(){
//     super();
//     this.initialState = {
//       theme: { primary: 'green' }
//     };
//   }
  
//   render() {
//     return (
//         <View style={styles.container}>
//           <Text>Open up App.js to start working on your app!</Text>
//           <Login />
//         </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
