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
import useProfile from '../domain/models/Profile';
import { Avatar } from '../components/atoms/Avatar';

function MenuProfileBanner(){

    const [profile, profileActions] = useProfile();
    const {Profile, Status} = profile;
    return (

            <Text>
                {Profile.firstName + " " + Profile.lastName + 
                "\n" + Profile.schoolName}
            </Text>
        
        
    );
}


const BottomTabs = createDrawerNavigator(
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
                    <View>
                        {Avatar({source:'../../assets/Heart_SVG.png', size:'xs'})}
                    </View>
                    <Text>
                        {MenuProfileBanner()}
                    </Text>
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
            screen: BottomTabs,
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
        initialRouteName: 'Drawer', // needs to be changed to Auth, which navigates to AuthLoading
    }
 );
 
export default Stack;