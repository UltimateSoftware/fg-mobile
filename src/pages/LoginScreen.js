import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default class LoginScreen extends Component {
    render() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
        <Button title="Login with Instagram"
                onPress = {() => {console.log("button to login with INSTA pressed")}}
        ></Button>
        <Button title = "Login with Twitter" 
                onPress = {() => {console.log("button to login with TWIT pressed")}}
        ></Button>
        </View>
    );
    }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    
 });