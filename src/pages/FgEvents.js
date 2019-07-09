import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import useEvents from '../domain/models/Event';

import HamburgerIcon from '../components/primatives/HamburgerIcon';
import { CalendarItemPopulated, CalendarItemEmpty } from '../components/atoms/CalendarItem';

function FgEvents() {
    const [events, eventActions] = useEvents()
    const {Event, Status} = events;
    let date = new Date();
    return (
        <View style={styles.container}>
        
        <Agenda
        items={{
            '2019-06-27': [],
            '2019-06-28': [{text: 'item 17 - any js object'}],
            '2019-06-29': [{text: 'item 18 - any js object'}],
            '2019-06-30': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-07-01': [{text: 'item 20 - any js object'}],
            '2019-07-02': [],
            '2019-07-03': [{text: 'item 22 - any js object'}],
            '2019-07-04': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-07-05': [{text: 'item 20 - any js object'}],
            '2019-07-06': [],
            '2019-07-07': [{text: 'item 22 - any js object'}],
            '2019-07-08': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-07-09': [{text: 'item 20 - any js object'}],
            '2019-07-10': [],
            '2019-07-11': [{text: 'item 22 - any js object'}],
            '2019-07-12': [{text: 'item 20'}],
            '2019-07-13': [],
            '2019-07-14': [{text: 'item 22 - any js object'}],
            '2019-07-15': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-07-16': [{text: 'item 20 - any js object'}],
            '2019-07-17': [],
            '2019-07-18': [{text: 'item 22 - any js object'}]
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

