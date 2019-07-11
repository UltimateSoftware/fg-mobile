import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FgChapter from "../pages/FgChapter";
import FgHangouts from "../pages/FgHangouts";
import FgProfile from "../pages/FgProfile";

/*
Each Screen that is implemented to be part of the bottom navigator must use

static navigationOptions = () => {
        return {
            headerLeft: <HamburgerIcon/>
        };
};

inside of the component, HamburgerIcon is located in components/primatives
*/

const Icons = {
    'Chapter': 'book',
    'Events': 'calendar-day',
    'Hangouts': 'user-friends',
    'Profiles': 'female'
}

const ChapterTab = createStackNavigator({
    Chapter: FgChapter
});
const HangoutTab = createStackNavigator({
        Hangouts: FgHangouts,
}, {
    headerMode: 'None'
});
const EventsTab = createStackNavigator({
    Events: FgHangouts // events is delayed!
});
const ProfileTab = createStackNavigator({
    Profiles: FgProfile
})

const Tabs = createBottomTabNavigator({
    Chapter: ChapterTab,
    Hangouts: HangoutTab,
    Events: EventsTab,
    Profiles: ProfileTab
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            let tabName;
            tabName = Icons[routeName]
            return <Icon name={tabName} size={20} />
        },
    }),
    initialRouteName: 'Profiles',
});
export default createAppContainer(Tabs);
