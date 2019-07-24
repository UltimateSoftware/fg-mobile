import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
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

  makeTitlePretty = ((title) => {
    let splitted = title.split(" ");
    for (var i = 0; i < splitted.length; i ++){
      splitted[i] = splitted[i][0] + splitted[i].slice(1).toLowerCase();
    }
    return splitted.join(" ");
  });

  toTiles = ((icebreakers) => {
    let tileArray = [];
    for(icebreaker of icebreakers){
      console.log(icebreaker);
      let s;
      icebreaker.name = makeTitlePretty(icebreaker.name);
      switch (icebreaker.name) {
        case 'Speed Round': s = require('../../assets/icebreakers-svgs/speed.svg'); break;
        case 'Candy Facts': s = require('../../assets/icebreakers-svgs/candy.svg'); break;
        case 'Minute To Win It': s = require('../../assets/icebreakers-svgs/minute.svg'); break;
        case 'Guess Who': s = require('../../assets/icebreakers-svgs/guess.svg'); break;
        case 'The Line Game': s = require('../../assets/icebreakers-svgs/line.svg'); break;
        case 'Silent Interview': s = require('../../assets/icebreakers-svgs/silence.svg'); break;
        case 'Human Knot': s = require('../../assets/icebreakers-svgs/knot.svg'); break;
      };
      tileArray.push(
        {'id':icebreaker.id,
        'source': s,
        'title': icebreaker.name}
      );
    };
    return tileArray;
  });

  return(
        <ScrollView style={{flex: 1}}>
            <View style={{...styles.title, flex: 2}} >
                <Text style={{...styles.title}}>
                    {"Choose an icebreaker"}
                </Text>
                <Text style={{...styles.text}}>
                    {"Once the girls arrive and get settled in, start your workshop off with a fun ice breaker! (We’ve included a few to get you started!) The point is to get the girls talking and having fun, and hopefully getting to know each other a little better."}
                </Text>
            </View>
            <View style={{...styles.container, flex: 5}} >
                <Tiles
                    onAction={(item) => {
                            navigate('IcebreakerDescription', {item: item, icebreaker: Icebreakers.find(x => x.id==item.id)});
                        }
                    }
                    tiles={toTiles(Icebreakers)}
                    />
            </View>
        </ScrollView>
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
