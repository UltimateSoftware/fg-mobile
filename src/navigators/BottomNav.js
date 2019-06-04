import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';
import GreenScreen from "../pages/FgChapter";
import RedScreen from "../pages/FgHangouts";

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
    Chapter: GreenScreen
});
const HangoutTab = createStackNavigator({
    Hangouts: RedScreen
})
const EventsTab = createStackNavigator({
    Events: RedScreen
});
const ProfileTab = createStackNavigator({
    Profiles: GreenScreen
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
    })
});
export default createAppContainer(Tabs);