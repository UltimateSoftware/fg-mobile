
import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../SharedConstants";

// pass in event also with text
export function CalendarItemPopulated({text}) {
    return (
        // click instead of view
        <View style={styles.item}>
            <Text>{text}</Text>
        </View>);
}

export function CalendarItemEmpty({text}) {
    // return (<View style={styles.emptyDate}/>)
    return (<View style={styles.item}/>)
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        minHeight: 60
    },
    // need ?????
    // emptyDate: {
    //     height: 35,
    //     flex: 1,
    //     paddingTop: 30,
    //     backgroundColor: 'white',
    //     borderRadius: 5,
    //     marginTop: 17
    // }
});