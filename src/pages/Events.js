import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, Image, FlatList} from 'react-native';
import {Header, Left, Right, H2, Button, Card} from 'native-base'
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {EventService} from "../services/EventService";

const ListView = (props) => {
    return (
        <ScrollView
                style={styles.scrollViewStyle}
                bounces={false}
            >
            <View style={styles.container}>
            <FlatList data={props.fgEvents} renderItem={({item, key}) => 
                <Card key={key} style={{width: SCREEN_WIDTH*.85, flexDirection: 'row', shadowOpacity: 10, paddingBottom: 5, paddingRight: 20 }}>
                    <Text style={styles.item}>{item.title}</Text>
                    <Text style={styles.item}>{item.time}</Text>
                </Card>}
                keyExtractor={(item, index) => index.toString()}
            />

            </View>
            </ScrollView>
    )
}

const CalendarView = (props) => {
    return (
        <View>
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
                props.fgEvents = service.getEvents(day);
            }}
            renderEmptyData={() => {return (<Text> No events </Text>);}}
        />
        <ListView fgEvents={props.fgEvents}></ListView>
        </View>
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
            selector: require('./Events-assets/list-view.png'),
            fgEvents: []
        };
    }

    async componentWillMount() {
        loadedData = await this.service.getEvents(this.d.getFullYear() + '-' + ("0" + (this.d.getMonth() + 1)).slice(-2) + '-' + ("0" + this.d.getDate()).slice(-2)) //current date formatted
        this.setState({
            fgEvents: loadedData
        });
    }

    handleToggle = async () => {
        this.setState(() => ({ listMode: !this.state.listMode}));
        
        if(this.state.listMode) {
            loadedData = await this.service.getEvents(this.d.getFullYear() + '-' + ("0" + (this.d.getMonth() + 1)).slice(-2) + '-' + ("0" + this.d.getDate()).slice(-2)) //current date formatted
            this.setState({
                selector: require('./Events-assets/list-view.png'),
                fgEvents: loadedData
            });
        } 
        else {
            loadedData = await this.service.getEvents()
            this.setState({
                selector: require('./Events-assets/grid-view.png'),
                fgEvents: loadedData
            });
        }
        console.log(this.state.fgEvents)
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
                {(this.state.listMode) ? <ListView fgEvents={this.state.fgEvents}/> : <CalendarView/> }
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