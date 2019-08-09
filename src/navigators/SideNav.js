import React from 'react'
import { createAppContainer, createDrawerNavigator, createStackNavigator, } from 'react-navigation';
import {Platform, StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Button} from 'react-native';
import BlueScreen from '../pages/BlueScreen';
import AuthLoading from '../pages/AuthLoading';
import BottomNav from './BottomNav';
import useProfile from '../domain/models/Profile';
import LoginScreen from '../pages/LoginScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SideTabs = createDrawerNavigator(
    {
        Tabs: BottomNav,
    },
    {
        initialRouteName: 'Tabs',
        drawerPosition: 'right',
        drawerBackgroundColor: 'transparent',
        contentComponent: props => {
            return (
                <ScrollView>
                    <SafeAreaView
                    forceInset={{ top: 'always', horizontal: 'never' }}
                    style={{...styles.menu}}>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <Button
                                    style={styles.buttonText}
                                    onPress={() => {
                                    props.navigation.navigate('Auth');
                                    props.navigation.closeDrawer();
                                    }}
                                    title="Blue Screen"
                                />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <TouchableOpacity
                                    style={styles.buttonText}
                                    onPress={() => {
                                    props.navigation.navigate('DefaultScreen');
                                    props.navigation.closeDrawer();
                                    }}
                                    >
                                <Image source={require('./fg-program.svg')}
                                    resizeMode='contain'
                                    style={styles.mySvg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <TouchableOpacity
                                    style={styles.buttonText}
                                    onPress={() => {
                                    props.navigation.navigate('Login');
                                    props.navigation.closeDrawer();
                                    }}
                                >
                                <Image source={require('./login.svg')}
                                    resizeMode='contain'
                                    style={styles.mySvg} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.myButton}>
                                <TouchableOpacity
                                    style={styles.buttonText}
                                    onPress={() => {
                                        props.navigation.navigate('Login');
                                        props.navigation.closeDrawer();
                                    }}
                                >
                                <Image source={require('./logout.svg')}
                                    resizeMode='contain'
                                    style={styles.mySvg} />
                                </TouchableOpacity>
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
            screen: SideTabs,
            headerTransparent: true,
            navigationOptions: {
                header: null
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
        marginTop: 350,
    },
    mySvg: {
        height: 45, 
        width: 45
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 12,
        marginTop: 12,
        marginRight: 36,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.6,
        shadowRadius: 7
    },
    myButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 82,
        width: 82,
        borderRadius: 164,
        backgroundColor: '#fff'

    },
    buttonText: {
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 11
    }
});
