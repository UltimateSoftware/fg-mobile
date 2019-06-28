import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import useEvents from '../domain/models/Event';

import HamburgerIcon from '../components/primatives/HamburgerIcon';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../SharedConstants';
import { CalendarItemPopulated, CalendarItemEmpty, ExpandItem, setState } from '../components/atoms/CalendarItem';
import TouchableHighlight from 'react-native-gesture-handler';

function FgEvents() {
    console.log("test 3");
    const [events, eventActions] = useEvents()
    const {Event, Status} = events;
    let date = new Date();
    return (
        <View style={styles.container}>
        
        <Agenda 
        // fmt for title, time, desc
        // multi-day events
        items={{
            '2019-06-23': [],
            '2019-06-24': [{text: 'item 17 - any js object'}],
            '2019-06-25': [{text: 'item 18 - any js object'}],
            // '`${date.getFullYear()}`-`${date.getMonth()}`-`${date.getDate()}`': [{text: 'item 1 - any js object'}],
            '2019-06-26': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-06-27': [{text: 'item 20 - any js object'}],
            '2019-06-28': [],
            '2019-06-22': [{text: 'item 22 - any js object'}]
        }}

        /*
        an event object
        let event = {
            title = String,
            startTime: String,
            endTime: String,
            startDate: String,
            endDate: String,
            location: String,
            description: String,
        }

        let events = event[];
        */

        /*
        an event has: 
        - start time
        - end time (?)
        - start date
        - end date (?)
        - title
        - description/extra info

        sort by date, then start time

        */

        renderItem={(item, firstItemInDay) => {
            console.log("test 2");
            return(<CalendarItemPopulated text={item.text} />);
        }}

        renderEmptyDate={() => {
            // insert graphic line or something
            return(<CalendarItemEmpty/>);
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

// ??????? fix
const styles = StyleSheet.create({
    container: {
        height: '100%',
        },
    // title: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    //     }
});

