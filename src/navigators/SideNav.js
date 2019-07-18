import React from 'react'
import { createAppContainer, createDrawerNavigator, createStackNavigator, } from 'react-navigation';
import {Platform, StyleSheet, Text, View, ScrollView, SafeAreaView, Image} from 'react-native';
import BlueScreen from '../pages/BlueScreen';
import AuthLoading from '../pages/AuthLoading';
import BottomNav from './BottomNav';
import useProfile from '../domain/models/Profile';
import LoginScreen from '../pages/LoginScreen';

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
                    style={styles.menu}
                >
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <Text
                                    style={styles.buttonText}
                                    onPress={() => {
                                    props.navigation.navigate('Auth');
                                    props.navigation.closeDrawer();
                                    }}
                                >
                                    BlueScreen
                                </Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <Text
                                    style={styles.buttonText}
                                    onPress={() => {
                                    props.navigation.navigate('DefaultScreen');
                                    props.navigation.closeDrawer();
                                    }}
                                >
                                    DefaultScreen
                                </Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <Text
                                    style={styles.buttonText}
                                    onPress={() => {
                                    props.navigation.navigate('Login');
                                    props.navigation.closeDrawer();
                                    }}
                                >
                                    LoginScreen
                                </Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <Text
                                    style={styles.buttonText}
                                    onPress={() => {
                                        props.navigation.navigate('Login');
                                        props.navigation.closeDrawer();
                                    }}
                                >
                                    Logout
                                </Text>
                            </View>
                        </View>
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
        Login:{
            screen: LoginScreen,
            navigationOptions:{
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

const styles = StyleSheet.create({
    menu:{
        backgroundColor: 'transparent'
    },
    banner:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'space-between',

    },
    textWrapper:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    name: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
    },
    subtitle: {
        flex: 1,
        color: '#404040',
        fontSize: 16,
    },
    profilePhotoWrapper:{
        flex: 0.5,
        alignItems: 'center',
        height: 90,
    },
    profilePhoto:{
        flex: 1, 
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 50/2,
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10
    },
    myButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,  //The Width must be the same as the height
        borderRadius: 200, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor: 'rgb(195, 125, 198)',

    },
    buttonText: {
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 14
    }
});
