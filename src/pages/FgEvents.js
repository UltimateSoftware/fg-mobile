import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import useEvents from '../domain/models/Event';

import HamburgerIcon from '../components/primatives/HamburgerIcon';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../SharedConstants';
import { CalendarItemPopulated, CalendarItemEmpty } from '../components/atoms/CalendarItem';
import {useNavigation} from 'react-navigation-hooks';
import {createStackNavigator} from 'react-navigation';
import NewEventFormComponent from './NewEventFormComponent';

function FgEvents() {
    const [events, eventActions] = useEvents()
    const {Event, Status} = events;
    let date = new Date();
    return (
        <View style={styles.container}>
        
        <Agenda 
        // fmt for title, time, desc
        // multi-day events
        items={{
            '2019-06-16': [],
            '2019-06-17': [{text: 'item 17 - any js object'}],
            '2019-06-18': [{text: 'item 18 - any js object'}],
            // '`${date.getFullYear()}`-`${date.getMonth()}`-`${date.getDate()}`': [{text: 'item 1 - any js object'}],
            '2019-06-19': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-06-20': [{text: 'item 20 - any js object'}],
            '2019-06-21': [],
            '2019-06-22': [{text: 'item 22 - any js object'}]
        }}

        renderItem={(item, firstItemInDay) => {
            return(<CalendarItemPopulated text={item.text}/>);
        }}
        renderEmptyDate={() => {
            return(<CalendarItemEmpty/>);
        }}
        renderEmptyData={() => {
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
        headerRight:
        <HamburgerIcon/>,
        headerLeft:
        <NewEvent/>
    };
};

function NewEvent(){
    const navigate = useNavigation();
    return (
        <View>
        <Button color='#F313B7' height='48' width='166' textAlign='center' borderRadius='25' fontSize='12' fontFamily='opensans-bold'
        title='Create Event' onPress={() => { navigate.navigate('EventForm') }}>
        </Button>
        </View>
    );
}

//Stylesheet for New Event Page
const otherStyles = StyleSheet.create({
    title: {
        fontFamily: 'opensans-regular',
        fontSize: 20,
        fontWeight: '600',
        color: "darkgray",
    },

    container: {},
});

class EventFormScreen extends Component {
    render(){
        return (
            <View>
                <NewEventFormComponent/>
            </View>
        );
    }
}

const newEventPage = createStackNavigator({
    Main: {
        screen: FgEvents
    },
    EventForm: {
        screen: EventFormScreen
    }},
    {
        mode: 'modal'
    },
)

export default newEventPage;
// export default FgEvents

// ??????? fix
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'pink'
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

