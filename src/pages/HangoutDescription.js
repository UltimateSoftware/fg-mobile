import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
//import hangoutLanding from '../pages/HangoutLanding';
/* 
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/

function HangoutDescription() {
    
    return (
        <View style={{flex: 1}}>
            <View style={{...styles.title, flex: 3}} >
                <Text style={{...styles.title, color: 'white'}}>
                    Hangout Name
                </Text>
            </View>
            <View style={{...styles.body, flex: 5}} >
                <Text> Date: March 21st, 2020 </Text>
                <Text> Time: 5:00 PM to 7:00 PM </Text>
                <Text> Description: having fun </Text>
            </View>
      </View>
    );
}

HangoutDescription.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default HangoutDescription

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'montserrat-bold',
        backgroundColor: '#070745',
        justifyContent: 'center',
        alignItems: 'center',

        },
    body: {
        fontSize: 30,
        textAlign: 'left',
        fontFamily: 'montserrat-bold',
        backgroundColor: 'white',
        color: 'white',
        margin: 20,
        lineHeight: 70,
    }
});


