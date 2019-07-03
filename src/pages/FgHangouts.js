import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Tiles} from '../components/molecules/Tiles';
import useHangouts from '../domain/models/Hangout';
import HangoutDescription from '../pages/HangoutDescription';
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

    console.log(Hangouts);

    return (
        <View style={styles.container}>
            <Tiles
                onAction={(item) => {
                        navigate("HangoutDescription", {item: item});
                    }
                }
                tiles={Hangouts.Hangout}
            />
        </View>
    );
}

FgHangouts.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>,
    };
};

//export default FgHangouts

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
        }
});

const HangoutNavigator = createStackNavigator({
    HangoutHome: {
      screen: FgHangouts
    },
    HangoutDescription: {
      screen: HangoutDescription,
    },
  }, {
      initialRouteName: 'HangoutHome',
  });

  export default createAppContainer(HangoutNavigator);
