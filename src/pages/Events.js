import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, Image, FlatList, Picker} from 'react-native';
import {Header, Left, Right, H2, Button, Card} from 'native-base'
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Dropdown } from 'react-native-material-dropdown';
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
                props.fgEvents = service.getEvents();
            }}
            renderEmptyData={() => {return (<Text> No events </Text>);}}
        />
        <ListView fgEvents={props.fgEvents}></ListView>
        </View>
    )
}

export class Events extends React.Component {
    service = new EventService();
    d = new Date();
    monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    constructor(props) {
        super(props);
        this.state = {
            fgEvents: [],
            currMonth: this.monthList[0][this.d.getMonth()],
            isLoading: true
        };
    }

    async componentWillMount() {
        loadedData = await this.service.getEvents()
        this.setState({
            fgEvents: loadedData,
            isLoading: false
        });
    }

    render() {
        console.log(this.state.currMonth)

        if(!this.state.isLoading) {
            return (
                <View style={{height: SCREEN_HEIGHT*.93, width: SCREEN_WIDTH, justifyContent: 'space-between'}}>
                <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.125, borderBottomWidth: 2}}> 
                    <Left>
                        <H2 style={{fontFamily: 'montserrat-bold', color: '#818282', paddingLeft: 20, fontSize: 24}}>Events</H2>
                    </Left>
                    <Right style={{alignItems:'center'}}>
                        <Button transparent style={{paddingRight: 30}}>
                            <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                        </Button>
                    </Right>
                </Header>
                <View style={{borderWidth: 1, minHeight: '5%', width: 400, marginTop: '1%'}}>
                    <Dropdown
                        label={this.state.currMonth}
                        data={this.monthList}
                    />
                </View>
                <View style={{borderWidth: 1, height: 200, width: 400}}>
                    List current date
                </View>
                <View style={{borderWidth: 1, height: 200, width: 400}}>
                    List events
                </View>
                </View>
            )
        } else {
            return <View></View>
        }
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