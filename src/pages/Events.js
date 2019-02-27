import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, Image, FlatList} from 'react-native';
import {Header, Left, Right, H2, Button, Card} from 'native-base'
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {EventService} from "../services/EventService";

var fgEvents = [];

const ListView = () => {
    if(fgEvents.length === 0) {
        return <View></View>
    } else {
        return (
            <ScrollView
                    style={styles.scrollViewStyle}
                    bounces={false}
                >
                <View style={styles.container}>
                <FlatList data={fgEvents} renderItem={({item, key}) => 
                    <Card key={key} style={{width: SCREEN_WIDTH*.85, flexDirection: 'row', shadowOpacity: 10, paddingBottom: 5, paddingRight: 20 }}>
                        <Text style={styles.item}>{item.title}</Text>
                        <Text style={styles.item}>{item.time}</Text>
                    </Card>}
                />
    
                </View>
                </ScrollView>
        )
    }
}

const CalendarView = () => {
    return (
        <Agenda 
            style={{
                width: SCREEN_WIDTH*.95,
                marginTop: 5,
            }}
            theme={{
                todayTextColor: 'tomato',
                arrowColor: 'tomato',
                dotColor: 'tomato',
                selectedDayBackgroundColor: 'tomato',
                textMonthFontSize: 20,
                textDayFontSize: 18,
            }}
            onDayPress={(day) => {
                service = new EventService();
                fgEvents = service.getEvents(day);
            }}
            renderEmptyData={() => {return (<Text> No Events </Text>);}}
        />
    )
}

const EventView = () => {
    return (
        <View></View>
    )
}

const CreateEventBox = () => {
    return (
        <View></View>
    )
}

export class Events extends React.Component {
    service = new EventService();
    d = new Date();

    constructor(props) {
        super(props);
        this.state = {
            listMode: false,
            selector: require('./Events-assets/list-view.png')
        };
    }

    componentWillMount() {
        console.log('loaded todays events only')
        fgEvent = this.service.getEvents(this.d.getFullYear() + '-' + ("0" + (this.d.getMonth() + 1)).slice(-2) + '-' + ("0" + this.d.getDate()).slice(-2)) //current date formatted
    }

    handleToggle() {
        this.setState(() => ({ listMode: !this.state.listMode}));
        
        if(this.state.listMode) {this.setState(() => (
            {selector: require('./Events-assets/list-view.png')}
            ))
            console.log('loaded todays events only')
            fgEvent = this.service.getEvents(this.d.getFullYear() + '-' + ("0" + (this.d.getMonth() + 1)).slice(-2) + '-' + ("0" + this.d.getDate()).slice(-2)) //current date formatted
        } 
        else {this.setState(() => (
            {selector: require('./Events-assets/grid-view.png')}
            ))
            fgEvent = this.service.getEvents();
        }
    }

    handleEventInspec() {
        return null
    }

    render() {
        return (
            <View style={{height: SCREEN_HEIGHT*.93, width: SCREEN_WIDTH, alignItems: 'center'}}>
            <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.125}}> 
                <Left>
                    <H2 style={{fontFamily: 'montserrat-bold', color: '#818282', paddingLeft: 20}}>Events</H2>
                </Left>
                <Right style={{alignItems:'center'}}>
                    <Button transparent style={{paddingRight: 30}} onPress={() => console.log(this.state.listMode)}>
                        <Image style={{width: 38, height: 38}} source={require('./Events-assets/plus_button.png')}/>
                    </Button>
                </Right>
            </Header>
            <View style={{flexDirection: 'row', marginLeft: SCREEN_WIDTH*.76, marginTop: 4}}>
                <Button transparent style={{padding: 10}} onPress={() => this.handleToggle(true)}>
                    <Image style={{width: 30, height: 30}} source={this.state.selector}/>
                </Button>
            </View>
            <View>
                {(this.state.listMode) ? <ListView/> : <CalendarView/> }
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        opacity: 1,
        flex: 1,
        paddingBottom: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    textContainer: {
        position: 'absolute',
        color: '#818282',
        textAlign: 'center'
    },
    inspirationTitle: {
        position: 'absolute',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    item: {
        padding: 10,
        height: 44,
        width: SCREEN_WIDTH*.40
    },
});