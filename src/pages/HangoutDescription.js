import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import FgHangouts from '../pages/FgHangouts';
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/


function HangoutDescription() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();
  const item = useNavigationParam('item');

  handleDeleteClick = (hangoutId) => {
    hangoutActions.deleteHangout(hangoutId);
    navigate("HangoutHome");
  }
  

  useEffect(() => {
    //componentDidMount
    (
      async () => {
        await hangoutActions.loadHangouts();
      }
    )();

    /*return (
      () => {
        //componentDidUnmount
      }
    )*/
  }, []);

  //const item = navigate.getParam(item)
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
            <View style={{...styles.buttonContainer}}>
              <View style={{...styles.editButton}}>
                <TouchableHighlight>
                  <Text style={{...styles.text}}>Edit</Text>
                </TouchableHighlight>
              </View>
              <View style={{...styles.deleteButton}}>
                <TouchableHighlight onPress={() => this.handleDeleteClick(item.id)}>
                  <Text style={{...styles.text}}>Delete</Text>
                </TouchableHighlight>
              </View>
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
    },
    editButton: {
      backgroundColor: "#3FB7D9",
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
    },
    deleteButton: {
      backgroundColor: "#F313B7",
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
    },
    buttonContainer: {
      flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    text: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'montserrat-bold',
      padding: 10,
    }
});
