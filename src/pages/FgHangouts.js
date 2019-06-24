import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Tiles} from '../components/molecules/Tiles';
import useHangouts from '../domain/models/Hangout';
import HangoutDescription from '../pages/HangoutDescription';
//import hangoutLanding from '../pages/HangoutLanding';
/*
 * FgHangouts might require a router of its own to create Icebreakers/games/etc.
*/

class FgHangouts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          hangouts: []
        };
    };

    componentWillMount() {
      fetch('http://ec2-34-201-168-0.compute-1.amazonaws.com:5000/hangouts', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJUazROVE15UVRZMU5EbENNVGN4TURJNE1qQXhSa1pETmtReU1FSTFPRFJHUmpWQk1qRTVNUSJ9.eyJpc3MiOiJodHRwczovL2ZlYXJsZXNzbHlnaXJsLmF1dGgwLmNvbS8iLCJzdWIiOiJxeXdScjFYYTVxYkFrclhLNVhKazZjRko2dkdDZUl0ekBjbGllbnRzIiwiYXVkIjoib2F1dGgvdG9rZW4iLCJpYXQiOjE1NjE3MzcxNzQsImV4cCI6MTU2MTgyMzU3NCwiYXpwIjoicXl3UnIxWGE1cWJBa3JYSzVYSms2Y0ZKNnZHQ2VJdHoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.PWmQNmy-ZOJpVBObuIat5xYThahCxyr3n4ajHFtgKH4TGi19Uhc91S_huFoTSv0urHnb3JEb_lPkGtFFG1Fd5RhpR7EvxcJw1InWq7Aj63cp4_S17lU_aBDPkeOSzxG-fz4gyyBXXqesKlaNbUPZMrVgpMVtsOoKAv4OXqyaMxbfqAouMZeECzOgQwDcOcK2ZRD9dljM4xkr0n3Kpbead2pJd6UVHtR6CvoKcpn3jTDDiLijVpkuiwB5-e6jxjRdmpZPrfVtnCrY_wFujejKtLE1JFS5NHH2NRVjSgQdJJ3H7THAKzdClV8mPC9gz380SO_FjZYS3hnYN1OEHV1RzQ",
        },
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          hangouts: responseJSON
        });
      })
      .catch((error) => {
         console.error(error);
      });
    }

    render() {
    const {navigation} = this.props;
    //const [hangouts, hangoutActions] = useHangouts()
    //const {Hangout, Status} = hangouts;
    return (
        <View style={styles.container}>
            <Tiles
                onAction={(item) => {
                        navigation.navigate("HangoutDescription", {item: item});
                    }
                }
                tiles={this.state.hangouts}
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
