import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/

function HangoutDescription(nav){
      const item = nav.navigation.getParam("item", "idk fam");
      return(
        <View style={{flex: 1}}>
            <View style={{...styles.title, flex: 3}} >
                <Text style={{...styles.title, color: 'white'}}>
                    {item.title}
                </Text>
            </View>
            <View style={{...styles.body, flex: 5}} >
                <Text> Date: {item.date.split(" ")[0]} </Text>
                <Text> Time: {item.date.split(" ")[1]} </Text>
                <Text> Location: {item.location} </Text>
                <Text> Description: {item.content.description} </Text>
            </View>
        </View>
      );
};

HangoutDescription.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default HangoutDescription;

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
