import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Tiles} from '../components/molecules/Tiles';
import useHangouts from '../domain/models/Hangout';
import HangoutDescription from '../pages/HangoutDescription'
//import hangoutLanding from '../pages/HangoutLanding';
/* 
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/

class FgHangouts extends React.Component{
    constructor(props){
        super(props);
    };
    render() {
    const {navigation} = this.props
    //const [hangouts, hangoutActions] = useHangouts()
    //const {Hangout, Status} = hangouts;
    return (
        <View style={styles.container}>
            <Tiles 
                onAction={(item) => {
                        navigation.navigate('HangoutDescription');
                        console.log(item)
                    }
                }
                tiles={[ // example use of tiles
                    {'id':'i', 'source':"s", 'name': 'name'},
                    {'id':'i1', 'source':'s1', 'name': 'name1'}
                ]}
            />
        </View>
    );
    }
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
  

