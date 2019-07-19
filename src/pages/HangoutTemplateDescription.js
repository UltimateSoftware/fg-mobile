import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {Tiles} from '../components/molecules/Tiles';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import FgHangouts from '../pages/FgHangouts';
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/


function HangoutTemplateDescription() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();
  const item = useNavigationParam('item');


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

  //const item = navigate.getParam(item);
  console.log(item);
  return(
        <View style={{flex: 1}}>
            <View style={{...styles.title, flex: 3}} >
              <Tiles tiles={[item]} />
            </View>
            <View style={{flex: 5}}>
              <Text style={{...styles.headingText}}>{item["title"]}</Text>
              <Text style={{...styles.bodyText}}>Description will be added here once backend is integrated.</Text>
              <Text style={{...styles.headingText}}>Discussions</Text>
              <Text style={{...styles.bodyText}}>Discussions will be added here once backend is integrated.</Text>
              <Text style={{...styles.headingText}}>Activities</Text>
              <Text style={{...styles.bodyText}}>Activities will be added here once backend is integrated.</Text>
            </View>
            <View style={{...styles.buttonContainer}}>
              <View style={{...styles.selectButton}}>
                <TouchableHighlight onPress={() => {navigate('ChooseIcebreakers')}}>
                  <Text style={{...styles.buttonText}}>Choose this hangout</Text>
                </TouchableHighlight>
              </View>
            </View>
        </View>
      );
};

HangoutTemplateDescription.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default HangoutTemplateDescription;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'montserrat-bold',
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
    headingText: {
      fontSize: 24,
      fontFamily: 'montserrat',
      textAlign: 'center',
      color: '#818282',
    },
    bodyText: {
      fontSize: 16,
      fontFamily: 'montserrat',
      textAlign: 'center',
      padding: 20,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
        },
    selectButton: {
      backgroundColor: "#F313B7",
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'montserrat-bold',
      padding: 10,
    }
});
