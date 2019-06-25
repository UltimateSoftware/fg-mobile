import React from 'react'
import { createAppContainer, createDrawerNavigator, createStackNavigator, } from 'react-navigation';
import {Platform, StyleSheet, Text, View, ScrollView, SafeAreaView, Image} from 'react-native';
import BlueScreen from '../pages/BlueScreen';
import AuthLoading from '../pages/AuthLoading';
import BottomNav from './BottomNav';
import useProfile from '../domain/models/Profile';
import { grey } from 'ansi-colors';
import { Avatar } from '../components/atoms/Avatar';

function MenuProfileBanner(){

    const [profile, profileActions] = useProfile();
    const {Profile, Status} = profile;
    return (
            <View style={styles.banner}>
                <View style={styles.profilePhotoWrapper}>
                    <Image style={styles.profilePhoto} 
                    source={require('../../assets/Heart_SVG.png')}  //eventually change to pull from profile photo
                    ></Image>
                </View>

                <View style = {styles.textWrapper}>

                    <Text style={styles.name}>
                        {Profile.firstName + " " + Profile.lastName}
                    </Text>

                    <Text style={styles.subtitle}>
                    {Profile.schoolName}
                    </Text>
                </View>
            </View>
            
        
        
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
<<<<<<< HEAD
                    { ProfileBanner() }
                    
=======
                    <View>
                        {Avatar({source:'../../assets/Heart_SVG.png', size:'xs'})}
                    </View>
                    <Text>
                        {MenuProfileBanner()}
                    </Text>
>>>>>>> Added profile picture to men banner, and test values to profile
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

const styles = StyleSheet.create({
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
        fontSize: 22,
        //fontWeight: 'bold',
    },
    subtitle: {
        flex: 1,
        color: '#404040',
        fontSize: 16,
    },
    profilePhotoWrapper:{
        flex: 0.5,
        alignItems: 'center',
        height: 85,
    },
    profilePhoto:{
        flex: 1, 
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 50/2,
        marginTop: 15,
        marginBottom: 15,
    },
});
