// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { HangoutLanding } from "../../../src/pages/HangoutLanding";


const Nav = createBottomTabNavigator(
    {
    //   Menu: null,
    //   MyChapter: null,
      Hangouts: HangoutLanding,
    //   Events: null,
    //   Profile: mapNavigationStateParamsToProps(FgProfile)
    },
    {
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
            return <Ionicons source={iconName} style={{height: 30, width: 30}} />; // size={horizontal ? 20 : 25} color={tintColor} 
        },
        }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

export default Nav;