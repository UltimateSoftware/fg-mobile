import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Tiles} from '../components/molecules/Tiles';
import useHangouts from '../domain/models/Hangout';
import HangoutDescription from '../pages/HangoutDescription';
import CreateHangoutFromTemplate from '../pages/CreateHangoutFromTemplate';
import {useNavigation} from 'react-navigation-hooks';
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/

function FgHangouts() {

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

    console.log(Hangouts.Hangout);

    return (

        <View style={{flex: 1}}>
            <View style={{...styles.container, flex: 5}} >
                <Tiles
                    
                    onAction={(item) => {
                            navigate('HangoutDescription',{item: item});
                        }
                    }
                    /*
                    tiles={[ // example use of tiles
                        {'id':'i', 'source':'s', 'name': 'name'},
                        {'id':'i1', 'source':'s1', 'name': 'name1'}
                    ]}
                    */
                    tiles={Hangouts.Hangout}
                />
            </View>
            <View style={{...styles.buttonContainer}}>
                <View style={{...styles.createButton}}>
                    <TouchableHighlight onPress={() => {navigate('CreateHangoutFromTemplate')}}>
                        <Text style={{...styles.text}}>Create</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

FgHangouts.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        },
    createButton: {
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

const HangoutNavigator = createStackNavigator({
    HangoutHome: {
      screen: FgHangouts
    },
    HangoutDescription: {
      screen: HangoutDescription,
    },
    CreateHangoutFromTemplate: {
        screen: CreateHangoutFromTemplate,
      },
  }, {
      initialRouteName: 'HangoutHome',
  });

  export default createAppContainer(HangoutNavigator);
