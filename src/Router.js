import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from "react-navigation";

import {CreateProfile } from "./pages/CreateProfile";
import {Login} from "./pages/Login";
import {Menu} from "./pages/Menu";
import {Chapter} from "./pages/Chapter";
import {HangoutLanding} from "./pages/HangoutLanding";
import {Events} from "./pages/Events";
import {FgProfile} from "./pages/FgProfile";
import {ChapterSelector} from "./pages/ChapterSelector"
import {CreateChapter} from "./pages/CreateChapter"
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: { screen: SignedInNavigator },
            SignedOut: { screen: SignedOutNavigator }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};

export const SignedOutNavigator = createStackNavigator(
    {
        SignIn: { screen: Login },
        SignUp: { screen: CreateProfile },
        SelectChapter: { screen: ChapterSelector },
        CreateChapter: { screen: CreateChapter }
    },
    {
        initialRouteName: 'SignIn',
        // initialRouteName: 'CreateChapter',
        navigationOptions: { 
            header: null 
        }
    }
);

export const SignedInNavigator =  createBottomTabNavigator(
    {
        Menu: Menu,
        MyChapter: Chapter,
        Hangouts: HangoutLanding,
        Events: Events,
        Profile: FgProfile
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