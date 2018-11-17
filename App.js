import React from 'react';
import {View} from 'react-native';
import {AppLoading, Font} from 'expo';
// import { Nav } from './src/components/Nav/Nav'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from 'react-navigation';

import {FgProfile} from "./src/pages/FgProfile";
import {MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR} from "./src/test/MockedTypes";
import {HangoutLanding} from "./src/pages/HangoutLanding";
import {Menu} from './src/pages/Menu';
import {Chapter} from './src/pages/Chapter';
import {Events} from './src/pages/Events'
// import getTheme from 'native-base';

const mapNavigationStateParamsToProps = (FgProfile) => {
    return class extends React.Component {
        render() {
            return (
                <View style={{flex: 1}}>
                    <FgProfile member={ MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR } />
                </View>
            );
        };
    }
}
const Nav =  createBottomTabNavigator(
    {
      Menu: Menu,
      MyChapter: Chapter,
      Hangouts: HangoutLanding,
      Events: Events,
      Profile: mapNavigationStateParamsToProps(FgProfile)
    },
    {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Profile') {
              iconName = `md-person`;
            } else if (routeName === 'Hangouts') {
              iconName = `md-people`;
            } else if (routeName === 'Events') {
              iconName = `md-calendar`
            } else if (routeName === 'Menu') {
              iconName = `md-menu`
            } else if (routeName === 'MyChapter') {
              iconName = `md-bonfire`
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            // return <Image source={{ uri: iconName}} style={{height: 30, width: 30}} />; // size={horizontal ? 20 : 25} color={tintColor} 
        },
        }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

export default class App extends React.Component {

    state = {
        isReady: false
    };

    async componentWillMount() {
        await Font.loadAsync({
            'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
            'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
            'Ionicons' : require("@expo/vector-icons/fonts/Ionicons.ttf")}),
        this.setState({ isReady: true })
    }

    render() {
        if (!this.state.isReady) {
            return (
              <AppLoading/>
            );
        }
        return (<Nav />);
    }

}
/*
navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Profile') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Hangouts') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
(
            <View>
                <HangoutLanding />
                <TabProp />
            </View>
        )
                <FgProfile member={ MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR }/>

*/