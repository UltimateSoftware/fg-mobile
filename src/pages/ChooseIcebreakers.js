import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Tiles} from '../components/molecules/Tiles';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import FgHangouts from '../pages/FgHangouts';
import HangoutTemplateDescription from '../pages/HangoutTemplateDescription';

function ChooseIcebreakers() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Icebreakers, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();


  useEffect(() => {
    //componentDidMount
    (
      async () => {
        await hangoutActions.loadIcebreakers();
      }
    )();

    /*return (
      () => {
        //componentDidUnmount
      }
    )*/
  }, []);
  //const item = navigate.getParam(item)

  toTiles = ((icebreakers) => {
    let tileArray = [];
    for(icebreaker of icebreakers){
        tileArray.push(
            {'id':icebreaker.id, 
            'source':require('../../assets/hangout_icons/supergirl.png'), 
            'title': icebreaker.name});
    };
    return tileArray;
  });

  return(
        <View style={{flex: 1}}>
            <View style={{...styles.title, flex: 3}} >
                <Text style={{...styles.title, color: 'white'}}>
                    {"Choose an Icebreaker"}
                </Text>
                <Text style={{...styles.text, color: 'white'}}>
                    {"Once the girls arrive and get settled in, start your workshop off with a fun ice breaker! (We’ve included a few to get you started!) The point is to get the girls talking and having fun, and hopefully getting to know each other a little better."}
                </Text>
            </View>
            <View style={{...styles.container, flex: 5}} >
            <Tiles
                    tiles={toTiles(Icebreakers)}
                />
            </View>
        </View>
      );
};

ChooseIcebreakers.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default ChooseIcebreakers;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'montserrat-bold',
        backgroundColor: '#070745',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
        },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        fontFamily: 'montserrat-bold',
        fontSize: 12
        },
    selectButton: {
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
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'opensans',
      padding: 10,
    }
});
