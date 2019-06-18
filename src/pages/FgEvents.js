import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import useEvents from '../domain/models/Event';

import HamburgerIcon from '../components/primatives/HamburgerIcon';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../SharedConstants';
import { CalendarItem } from '../components/atoms/CalendarItem';

function FgEvents() {
    const [events, eventActions] = useEvents()
    const {Event, Status} = events;
    let date = new Date();
    return (
        <View style={styles.container}>
        
        <Agenda 
        items={{
            '2019-06-16': [],
            '2019-06-17': [[{text: 'item 1 - any js object'}]],
            '2019-06-18': [{text: 'item 1 - any js object'}],
            // '`${date.getFullYear()}`-`${date.getMonth()}`-`${date.getDate()}`': [{text: 'item 1 - any js object'}],
            '2019-06-19': [{text: 'item 2 - any js object'}],// {text: 'another one'}],
            '2019-06-20': [[{text: 'item 1 - any js object'}]],
            '2019-06-21': [],
        }}
        renderItem={(item, firstItemInDay) => {
            <CalendarItem text={item.text}/>
        }}
        renderEmptyDate={() => {
            return(<View />);
        }}
        rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text
        }}
        />
        </View>
    );
}

FgEvents.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default FgEvents

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'black'
        // flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
        // margin: 0
        },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        }
});

