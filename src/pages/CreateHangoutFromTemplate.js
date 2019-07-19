import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Tiles} from '../components/molecules/Tiles';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';

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

  return(
        <View style={{flex: 1}}>
            <View style={{...styles.title, flex: 3}} >
                <Text style={{...styles.title}}>
                    {"Choose a hangout"}
                </Text>
                <Text style={{...styles.text}}>
                    {"Hangouts are the heart of your chapter, bringing girls together each month to talk, connect, share, and break down barriers. A typical hangout consists of an intro, icebreaker activity, topic discussion, group Q&A, and a wrap up. Each hangout is designed to fit into a 60 minute period, but feel free to adjust it to best fit your needs."}
                </Text>
            </View>
            <View style={{...styles.container, flex: 5}} >
                <Tiles
                        onAction={(item) => {
                              navigate('HangoutTemplateDescription', {item: item});
                            }
                        }
                        tiles={[
                            {'id':'i0', 'source':require('../../assets/hangout_icons/strong-woman.svg'), 'title': 'The Supergirl Dilemma'},
                            {'id':'i1', 'source':require('../../assets/hangout_icons/bossgirl.svg'), 'title': 'Girl Drama'},
                            {'id':'i2', 'source':require('../../assets/hangout_icons/self-love.svg'), 'title': 'Self Love and Self Esteem'},
                            {'id':'i3', 'source':require('../../assets/hangout_icons/leadership.svg'), 'title': '#GirlBoss'},
                            {'id':'i4', 'source':require('../../assets/hangout_icons/girlfirnds.svg'), 'title': 'Girl Friends'},
                            {'id':'i5', 'source':require('../../assets/hangout_icons/spiritual.svg'), 'title': 'Zen Girl'},
                            {'id':'i6', 'source':require('../../assets/hangout_icons/woman.svg'), 'title': 'Fearlessness'},
                            {'id':'i7', 'source':require('../../assets/hangout_icons/relationships-n-dating.svg'), 'title': 'Dating and Relationships'},
                            {'id':'i8', 'source':require('../../assets/hangout_icons/dream.svg'), 'title': 'Dream on Baby'}
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
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'montserrat-light',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        color: '#818282'
        },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        fontFamily: 'montserrat-bold',
        fontSize: 12
        },
    text: {
      fontSize: 14,
      color: '#59828B',
      textAlign: 'center',
      fontFamily: 'opensans',
      padding: 10,
    }
});
