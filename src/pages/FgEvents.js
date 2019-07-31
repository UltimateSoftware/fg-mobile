import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import useEvent from '../domain/models/Event';

import HamburgerIcon from '../components/primatives/HamburgerIcon';
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
            return null;
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
        <Button color='cornflowerblue' title='Create Event' type="clear" onPress={() => {
            navigate.navigate('EventForm') }}>
        
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

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});

