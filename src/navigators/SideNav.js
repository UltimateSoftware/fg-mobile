import React from 'react'
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
   } from 'react-navigation';
import {Platform, StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import BlueScreen from '../pages/BlueScreen';
import AuthLoading from '../pages/AuthLoading';
import BottomNav from './BottomNav';

const ButtomTabs = createDrawerNavigator(
    {
        Tabs: BottomNav,
    },
    {
        initialRouteName: 'Tabs',
        drawerPosition: 'right',
        contentComponent: props => {
            return (
                <ScrollView>
                    <SafeAreaView
                    forceInset={{ top: 'always', horizontal: 'never' }}
                >
                    <Text
                        onPress={() => {
                        props.navigation.navigate('Auth');
                        props.navigation.closeDrawer();
                        }}
                    >
                        BlueScreen
                    </Text>
                    <Text
                        onPress={() => {
                        props.navigation.navigate('DefaultScreen');
                        props.navigation.closeDrawer();
                        }}
                    >
                        DefaultScreen
                    </Text>
                    </SafeAreaView>
                </ScrollView>
            )
        }
    }
 );
 const Stack = createStackNavigator(
    {
        Drawer: {
            screen: ButtomTabs,
            navigationOptions: {
                header: null,
            },
            
        },
        Auth: {
            screen: BlueScreen,
            navigationOptions: {
                header: null,
            }
        },
        AuthLoading: AuthLoading,
    },
    {
        initialRouteName: 'Drawer',
    }
 );
 
export default Stack;