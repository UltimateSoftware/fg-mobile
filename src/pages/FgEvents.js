import React, { useEffect } from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
import useEvent from '../domain/models/Event';
import {useNavigation} from 'react-navigation-hooks';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import NewEventFormComponent from './NewEventFormComponent';
import {createStackNavigator} from 'react-navigation'
import { CalendarItemPopulated, CalendarItemEmpty } from '../components/atoms/CalendarItem';

function FgEvents() {

    // ** for future backend interaction **
    // const [events, eventActions] = useEvent()       // event actions are functions from event service
    // const {Event, Status} = events;                 // extract the Event and Status from the state

    // useEffect(async () => {
    //     await eventActions.getEvents()              // this line will update the variables (Event, Status)
    // }, [])
    
    return (
        <View style={styles.container}>
        
        <Agenda
        items={{
            '2019-07-28': [{text: 'item 22 - any js object'}],
            '2019-07-29': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-07-30': [{text: 'item 20 - any js object'}],
            '2019-07-31': [],
            '2019-08-01': [{text: 'item 22 - any js object'}],
            '2019-08-02': [{text: 'item 22 - any js object'}],
            '2019-08-03': [{text: 'item 22 - any js object'}]
        }}

        renderItem={(item, firstItemInDay) => {
            return(
                <CalendarItemPopulated text={item.text} style={styles.eventtitle}/>
            );
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
        <Button style={eventButtonStyle.button} title='Create Event' color="#F313B7" onPress={() => { navigate.navigate('EventForm') }}>
        </Button>
        </View>
    );
}

//Stylesheet for New Event Button
const eventButtonStyle = StyleSheet.create({
    button: {
        color: '#F313B7',
        height: 48,
        width: 166,
        textAlign: 'center',
        borderRadius: 25,
        fontSize: 12,
        fontFamily: 'opensans-bold',
    }
})

//Stylesheet for New Event Page
const otherStyles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans',
        fontSize: 20,
        fontWeight: '600',
        color: "darkgray",
    },

    container: {},
});

function EventFormScreen() {
    return (
        <View>
            <NewEventFormComponent/>
        </View>
    );
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

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
        },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        }
});

