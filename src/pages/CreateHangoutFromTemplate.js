import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Tiles} from '../components/molecules/Tiles';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';

function CreateHangoutFromTemplate() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Templates, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();


  useEffect(() => {
    //componentDidMount
    (
      async () => {
        await hangoutActions.loadTemplates();
      }
    )();

    /*return (
      () => {
        //componentDidUnmount
      }
    )*/
  }, []);

  toTiles = ((templates) => {
    let tileArray = [];
    for(template of templates){
      console.log(template);
      let s;
      switch (template.title) {
        case 'The Supergirl Dilemma': s = require('../../assets/hangout_icons/strong-woman.svg'); break;
        case 'Girl Drama': s = require('../../assets/hangout_icons/bossgirl.svg'); break;
        case 'Self Love and Self Esteem': s = require('../../assets/hangout_icons/self-love.svg'); break;
        case '#GirlBoss': s = require('../../assets/hangout_icons/leadership.svg'); break;
        case 'Girl Friends': s = require('../../assets/hangout_icons/girlfirnds.svg'); break;
        case 'Zen Girl': s = require('../../assets/hangout_icons/spiritual.svg'); break;
        case 'Fearlessness': s = require('../../assets/hangout_icons/woman.svg'); break;
        case 'Dating and Relationships': s = require('../../assets/hangout_icons/relationships-n-dating.svg'); break;
        case 'Dream on Baby': s = require('../../assets/hangout_icons/dream.svg'); break;
      };
      tileArray.push(
        {'id':template.id,
        'source': s,
        'title': template.title}
      );
    };
    return tileArray;
  });

  return(
        <ScrollView style={{flex: 1}}>
            <View style={{...styles.title, flex: 2}} >
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
                              navigate('HangoutTemplateDescription', {item: item, template: Templates.find(x => x.id==item.id)});
                            }
                        }
                        tiles={toTiles(Templates)}

                    />
            </View>
        </ScrollView>
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
        paddingTop: 10,
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
