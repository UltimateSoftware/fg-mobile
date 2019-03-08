import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, Animated, Image, FlatList, Picker} from 'react-native';
import {Header, Left, Right, H2, Button, Card} from 'native-base'
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import { Dropdown } from 'react-native-material-dropdown';
import {EventService} from "../services/EventService";
import { Agenda } from 'react-native-calendars';

export class Events extends React.Component {
    service = new EventService();
    d = new Date();
    monthList = [{value: 'January'}, {value: 'February'}, {value: 'March'}, {value: 'April'}, {value: 'May'}, {value: 'June'},
                 {value: 'July'}, {value: 'August'}, {value: 'September'}, {value: 'October'}, {value: 'November'}, {value: 'December'}]

    constructor(props) {
        super(props);
        this.state = {
            fgEvents: {},
            currMonth: this.monthList[this.d.getMonth()].value,
            isLoading: true,
            creatingEvent: false,
        };
    }

    async componentWillMount() {
        loadedData = this.consumeableData(await this.service.getEvents())
        this.setState({
            fgEvents: loadedData,
            isLoading: false
        });
    }

    returnDate() {
        return this.d.getFullYear() + '-' + ("0" + (this.d.getMonth() + 1)).slice(-2) + '-' + ("0" + this.d.getDate()).slice(-2)
    }

    consumeableData(rawData) {
        data = {}
        for (i = this.d.getFullYear(); i <= this.d.getFullYear() + 1; i++) {
            for (j = 1; j <= 12; j++) {
                for (k = 1; k <= 31; k++) {
                    date = i + '-' + ("0" + (j + 1)).slice(-2) + '-' + ("0" + k).slice(-2)
                    data[date] = []
                }
            }
        }

        for (i = 0; i < rawData.length; i++) {
            data[rawData[i].date].push({
                'event': rawData[i].description, 
                'location': rawData[i].location})
        }

        return data
    }

    render() {

        console.log(Object.keys(this.state.fgEvents).length)

        if(!this.state.isLoading) {
            return (
                <View style={{height: SCREEN_HEIGHT*.91, width: SCREEN_WIDTH, alignItems: 'stretch', justifyContent: 'flex-start', flexGrow: 1}}>
                <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.125, borderBottomWidth: 2}}> 
                    <Left>
                        <H2 style={{fontFamily: 'montserrat-bold', color: '#818282', marginLeft: '14%', fontSize: 24}}>Events</H2>
                    </Left>
                    <Right style={{alignItems:'center'}}>
                        <Button transparent style={{paddingRight: 30}}>
                            <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                        </Button>
                    </Right>
                </Header>
                    <Agenda
                        // the list of items that have to be displayed in agenda. If you want to render item as empty date
                        // the value of date key kas to be an empty array []. If there exists no value for date key it is
                        // considered that the date in question is not yet loaded
                        items={this.state.fgEvents}
                        // callback that gets called when items for a certain month should be loaded (month became visible)
                        loadItemsForMonth={(month) => {console.log(Object.keys(this.state.fgEvents).length)}}
                        // callback that fires when the calendar is opened or closed
                        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                        // callback that gets called on day press
                        onDayPress={(day)=>{console.log('day pressed')}}
                        // callback that gets called when day changes while scrolling agenda list
                        onDayChange={(day)=>{console.log('day changed')}}
                        // initially selected day
                        selected={this.returnDate()}
                        // Max amount of months allowed to scroll in a direction. Default = 50
                        pastScrollRange={0}
                        futureScrollRange={11}
                        // specify how each item should be rendered in agenda
                        // renderItem={(item, firstItemInDay) => {return (
                        //     <Button style= {{borderWidth: 1, flex: 1}}>
                        //         <Text>{item.text}</Text>
                        //     </Button>
                        // );}}
                        // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                        // renderDay={(day, item) => {
                        //     if(typeof day === 'undefined') { return <View/>; }
                        //     else {
                        //         return (
                        //         <Card style= {{borderWidth: 1, flex: 1/2}}>
                        //             <Text>{day.day}</Text>
                        //         </Card>);
                        //     } 
                        // }}
                        renderItem={this.renderItem.bind(this)}
                        // specify how empty date content with no items should be rendered
                        renderEmptyDate={this.renderEmptyDate.bind(this)}
                        // specify how agenda knob should look like
                        // renderDay = {(day, item) => {
                        //     if(typeof item !== 'undefined') {
                        //         if(Object.keys(item) !== 0){
                        //             return <Text>baka</Text>
                        //         }
                        //     }
                        // }}
                        //renderKnob={() => {return (<View />);}}
                        // specify what should be rendered instead of ActivityIndicator
                        renderEmptyData = {this.renderEmptyDate.bind(this)}
                        // specify your item comparison function for increased performance
                        rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                        // agenda theme
                        theme={{
                            agendaDayTextColor: 'tomato',
                            agendaDayNumColor: 'tomato',
                            agendaTodayColor: 'tomato',
                            agendaKnobColor: 'tomato'
                        }}
                        // agenda container style
                        style={{}}
                    />
                </View>
            )
        } else {
            return <View></View>
        }
    }

    renderItem(item) {
        return (
          <View style={[styles.item, {height: item.height}]}>
            <Text>
                {item.event}
            </Text>
            <Text>
                {item.location}
            </Text>
        </View>
        );
      }
    
    renderEmptyDate() {
        return (
          <View></View>
        );
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
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: '5%',
        marginTop: '5%'
      },
      emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});

{/* <Dropdown
                        containerStyle={{flex: 0.4, paddingLeft: 20, borderBottomColor: '#BDCDD1'}}
                        baseColor='#BDCDD1'
                        itemTextStyle={{textDecorationColor: '#BDCDD1'}}
                        itemCount={4}
                        selectedItemColor={'#F0166D'}
                        data={this.monthList}
                        value={this.state.currMonth}
                    /> */}