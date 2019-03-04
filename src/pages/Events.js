import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, Animated, Image, FlatList, Picker} from 'react-native';
import {Header, Left, Right, H2, Button, Card} from 'native-base'
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import { Dropdown } from 'react-native-material-dropdown';
import {EventService} from "../services/EventService";
import {EventsList} from './EventsList';

// const ListView = (props) => {
//     return (
//         <ScrollView
//                 style={styles.scrollViewStyle}
//                 bounces={false}
//             >
//             <View style={styles.container}>
//             <FlatList data={props.fgEvents} renderItem={({item, key}) => 
//                 <Card key={key} style={{flexDirection: 'row', shadowOpacity: 10, paddingBottom: 5, paddingRight: 20 }}>
//                     <Text style={styles.item}>{item.title}</Text>
//                     <Text style={styles.item}>{item.time}</Text>
//                 </Card>}
//                 keyExtractor={(item, index) => index.toString()}
//             />

//             </View>
//             </ScrollView>
//     )
// }


export class Events extends React.Component {
    service = new EventService();
    d = new Date();
    monthList = [{value: 'January', key: '01'}, {value: 'February'}, {value: 'March'}, {value: 'April'}, {value: 'May'}, {value: 'June'},
                 {value: 'July'}, {value: 'August'}, {value: 'September'}, {value: 'October'}, {value: 'November'}, {value: 'December'}]
    //monthList = ['Jan', 'Feb', 'Mar', 'Apr']

    constructor(props) {
        super(props);
        this.state = {
            fgEvents: [],
            currMonth: this.monthList[this.d.getMonth()].value,
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
                <View style={{height: SCREEN_HEIGHT*.91, width: SCREEN_WIDTH, alignItems: 'stretch', justifyContent: 'flex-start', flexGrow: 1}}>
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
                <View style={{margin: '2%', flexDirection: 'row'}}>
                    <Dropdown
                        containerStyle={{flex: 0.4, paddingLeft: 20, borderBottomColor: '#BDCDD1'}}
                        baseColor='#BDCDD1'
                        itemTextStyle={{textDecorationColor: '#BDCDD1'}}
                        itemCount={4}
                        selectedItemColor={'#F0166D'}
                        data={this.monthList}
                        value={this.state.currMonth}
                    />
                </View>
                <View style={{borderWidth: 1, margin: '2%', flex: 1}}>
                    <EventsList fgEvents={this.state.fgEvents}/>
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