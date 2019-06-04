import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default class BlueScreen extends Component {
    render() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Blue Screen</Text>
        </View>
    );
    }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
 });