import React from 'react';
import { View, Image } from 'react-native';
import { AppLoading, Font } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// import { FgProfile } from "./src/pages/FgProfile/FgProfile";
import { FgProfileService } from "./src/services/FgProfileService";
import {
    MOCKED_MEMBER_DARIA_with_AVATAR_no_BANNER, 
    MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR,
    MOCKED_MEMBER_DARIA_with_BANNER_no_AVATAR
} from "./src/test/MockedTypes";
import { FgMember } from "./src/types/FgMember";
import { ListOfHangouts } from "./src/pages/ListOfHangouts";
import { IceBreakers } from "./src/pages/IceBreakers";
// import {CreateProfile} from "./src/pages/CreateProfile/CreateProfile";
// import {HangoutNav} from "./src/Navigators/HangoutsNav"
import { Container, Header, Content, Tabs, StyleProvider, Text } from "./native-base-theme/components"

// import getTheme from 'native-base';
import getTheme from './native-base-theme/components'; 

import material from './native-base-theme/variables/platform';
import { TabProp } from './src/components/Tabs';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './src/utils/sharedConstants';

import { MainScreenNavigator } from './src/Navigation';

// const MOCKED_MEMBER_ID = '77bac705-1ce2-4a7b-8247-cf4bdfd451a9';
// const mapNavigationStateParamsToProps = (FgProfile) => {
//     return class extends React.Component {
//         render() {
//             return (
//                 <View style={{flex: 1}}>
//                     <FgProfile member={ MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR } />
//                 </View>
//             );
//         };
//     }
// }

// const HangoutsNav =  createBottomTabNavigator(
//     {
//       Land: ListOfHangouts,
//       Ice: IceBreakers
//     },
//     {
//     navigationOptions: ({ navigation }) => ({
//         tabBarVisible: false
//         }),
//     }
//   );
  

// const Nav =  createBottomTabNavigator(
//     {
//         // Create: CreateProfile,
//     //   Menu: null,
//     //   MyChapter: null,
//         Hangouts: HangoutsNav,
//     // Hangouts: ListOfHangouts,
//     //   Events: null,
//         Profile: mapNavigationStateParamsToProps(FgProfile)
//     },
//     {
//     navigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//             const { routeName } = navigation.state;
//             let iconName;
//             if (routeName === 'Profile') {
//             iconName = 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-user-profile-blue-icon-by-vexels.png'; // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Soiw3Gaif4qBI8kxi5f3YDkPA2EIxH-OOSe-1BmBUFQbRJE'; `ios-information-circle${focused ? '' : '-outline'}`;
//             } else if (routeName === 'Hangouts') {
//             iconName = 'https://cdn4.iconfinder.com/data/icons/let-s-party/756/dance_party_drunk_disco_birthday_celebrate_pub-512.png'; // `ios-options${focused ? '' : '-outline'}`;
//             } else if (routeName == 'Create') {
//                 tabBarOptions: {showIcon: false}
//             }
    
//             // You can return any component that you like here! We usually use an
//             // icon component from react-native-vector-icons
//             return <Image source={{ uri: iconName}} style={{height: 30, width: 30}} />; // size={horizontal ? 20 : 25} color={tintColor} 
//         },
//         }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   );
//   const MainScreenNavigator = createStackNavigator({
  
//     ScreenNotOnTabbar: { screen: CreateProfile },
//     Tab: { screen: Nav },
    
//   },{
//       mode: "modal",
//       navigationOptions: {
//           header: null
//       }
//   });

export default class App extends React.Component {

    service = new FgProfileService();
    // member : FgMember = this.service.getMemberWithId(MOCKED_MEMBER_ID);

    state = {
        isReady: false
    };

    async componentWillMount() {
        await Font.loadAsync({
            'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
            'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        }),
            
        this.setState({ isReady: true })
    }

    render() {
        if (!this.state.isReady) {
            return (
              <AppLoading/>
            );
        }

        return <MainScreenNavigator />;
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