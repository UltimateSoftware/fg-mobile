import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Tiles} from '../components/molecules/Tiles';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import FgHangouts from '../pages/FgHangouts';
//import hangoutIcons from '../assets/hangout_icons'
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/


handleDeleteClick = (hangoutId) => {

}

function HangoutDescription() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();


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
                    {"Create Hangout From Template"}
                </Text>
            </View>
            <View style={{...styles.container, flex: 5}} >
                <Tiles
                        onAction={(item) => {
                            }
                        }
                        tiles={[ 
                            {'id':'i', 'source':require('../../assets/hangout_icons/supergirl.png'), 'title': 'The Supergirl Dilemma'},
                            {'id':'i1', 'source':require('../../assets/hangout_icons/drama.png'), 'title': 'Girl Drama'},
                            {'id':'i2', 'source':require('../../assets/hangout_icons/self-love.png'), 'title': 'Self Love and Self Esteem'},
                            {'id':'i3', 'source':require('../../assets/hangout_icons/girlboss.png'), 'title': '#GirlBoss'},
                            {'id':'i4', 'source':require('../../assets/hangout_icons/girlfriends.png'), 'title': 'Girl Friends'},
                            {'id':'i5', 'source':require('../../assets/hangout_icons/zen.png'), 'title': 'Zen Girl'},
                            {'id':'i6', 'source':require('../../assets/hangout_icons/fearless.png'), 'title': 'Fearlessness'},
                            {'id':'i7', 'source':require('../../assets/hangout_icons/heart.png'), 'title': 'Dating and Relationships'},
                            {'id':'i8', 'source':require('../../assets/hangout_icons/dream.png'), 'title': 'Dream on Baby'}
                        ]}
                        
                    />
            </View>
            <View style={{...styles.buttonContainer}}>
              <View style={{...styles.selectButton}}>
                <TouchableHighlight>
                  <Text style={{...styles.text}}>Select</Text>
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
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'montserrat-bold',
      padding: 10,
    }
});
