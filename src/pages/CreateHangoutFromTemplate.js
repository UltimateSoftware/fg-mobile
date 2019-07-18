import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Tiles} from '../components/molecules/Tiles';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import FgHangouts from '../pages/FgHangouts';
import HangoutTemplateDescription from '../pages/HangoutTemplateDescription';
//import hangoutIcons from '../assets/hangout_icons'
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/


handleDeleteClick = (hangoutId) => {

}

function CreateHangoutFromTemplate() {
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
                    {"Choose a hangout"}
                </Text>
                <Text style={{...styles.text, color: 'white'}}>
                    {"Hangouts are the heart of your chapter, bringing girls together each month to talk, connect, share, and break down barriers. A typical hangout consists of an intro, icebreaker activity, topic discussion, group Q&A, and a wrap up. Each hangout is designed to fit into a 60 minute period, but feel free to adjust it to best fit your needs."}
                </Text>
            </View>
            <View style={{...styles.container, flex: 5}} >
                <Tiles
                        onAction={(item) => {
                              console.log(item);
                              navigate('HangoutTemplateDescription', {item: item});
                            }
                        }
                        tiles={[
                            {'id':'i0', 'source':require('../../assets/hangout_icons/supergirl.png'), 'title': 'The Supergirl Dilemma'},
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
        </View>
      );
};

CreateHangoutFromTemplate.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default CreateHangoutFromTemplate;

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
