
import React, { Component } from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../SharedConstants";
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';


export function CalendarItemPopulated({text}) {
    // init state=false bc not expanded
    const [isExpanded, expandItem] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.txtbox}>
                <Text>{text}</Text>
            </View>
            <View style={styles.btnbox}>
                <TouchableOpacity
                    onPress={() => {
                        return expandItem(!isExpanded);
                    }}
                >
                    <Icon name={isExpanded ? "chevron-up" : "chevron-down"}/>
                </TouchableOpacity>
                {
                    isExpanded && 
                    <View>
                        <Text>Hidden</Text>
                    </View>
                }
            </View>
        </View>
        );
}

export function CalendarItemEmpty() {
    return (<View style={styles.item}/>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        minHeight: 60
    },
    txtbox: {
        //
    },
    btnbox: {
        flex: 1,
        alignItems: 'flex-end',
        textAlign: 'right'
    }
});