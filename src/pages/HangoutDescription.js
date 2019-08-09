import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import {Tiles} from '../components/molecules/Tiles';


function HangoutDescription() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();
  const item = useNavigationParam('item');

  handleDeleteClick = (hangoutId) => {
    hangoutActions.deleteHangout(hangoutId);
    navigate("HangoutHome");
  }

  return(
          <ScrollView style={{flex: 1}}>
              <View style={{...styles.title, flex: 3}} >
                <Tiles onAction={() => {}} tiles={[item]} />
              </View>
              <View style={{flex: 5}} >
                  <Text style={{...styles.headingText}}>Description</Text>
                  <Text style={{...styles.bodyText}}>{item.content.description}</Text>
                  <Text style={{...styles.headingText}}>Date and Time</Text>
                  <Text style={{...styles.bodyText}}>{item.date.split(" ")[0] + ", "+ item.date.split(" ")[1]}</Text>
                  <Text style={{...styles.headingText}}>Location</Text>
                  <Text style={{...styles.bodyText}}>{item.location}</Text>
              </View>
              <View style={{...styles.buttonContainer}}>
                <View style={{...styles.editButton}}>
                  <TouchableHighlight underlayColor="transparent">
                    <Text style={{...styles.text}}>Edit</Text>
                  </TouchableHighlight>
                </View>
                <View style={{...styles.deleteButton}}>
                  <TouchableHighlight underlayColor="transparent" onPress={() => this.handleDeleteClick(item.id)}>
                    <Text style={{...styles.text}}>Delete</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </ScrollView>
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
        justifyContent: 'center',
        alignItems: 'center',

        },
    body: {
      fontSize: 16,
      fontFamily: 'opensans',
      textAlign: 'center',
      padding: 20,
      color: '#59828B'
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
    },
    headingText: {
      fontSize: 24,
      fontFamily: 'montserrat-light',
      textAlign: 'center',
      color: '#818282',
    },
    bodyText: {
      fontSize: 16,
      fontFamily: 'opensans',
      textAlign: 'center',
      padding: 20,
      color: '#59828B'
    },
});
