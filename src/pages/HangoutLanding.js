import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image, ListView, TouchableOpacity} from 'react-native';
import { Header, Left, Button, Body, Right, Title, Card, H2, CardItem} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent
const ListOfHangouts = () => {
    return (
            <ScrollView
                style={styles.scrollViewStyle}
                bounces={false}
            >
 
            <View style={styles.container}>
            <FlatList
            data={[
                {key: '1', id: 'Pot Luck', date: 'January, 10, 2019'},
                {key: '2', id: 'Jackson Memorial', date: 'Feburary 10, 2019'},
                {key: '3', id: 'James Albright Foundation', date: 'March 10, 2019'},
                {key: '4', id: 'Starbucks MeetUp', date: 'April 10, 2019'},
                {key: '5', id: 'JFK Library', date: 'May 10, 2019'},
                {key: '6', id: 'Jillian Fitness', date: 'June 10, 2019'},
                {key: '7', id: 'Jimmy Kimell Watch Party', date: 'July 10, 2019'},
                {key: '8', id: 'Julie\'s Birhtday', date: 'August 10, 2019'},
                {key: '9', id: 'Ronald McDonald Foundation', date: 'September 10, 2019'},
                {key: '10', id: 'Pot Luck', date: 'January, 10, 2019'},
                {key: '11', id: 'Jackson Memorial', date: 'Feburary 10, 2019'},
                {key: '12', id: 'James Albright Foundation', date: 'March 10, 2019'},
                {key: '13', id: 'Starbucks MeetUp', date: 'April 10, 2019'},
                {key: '14', id: 'JFK Library', date: 'May 10, 2019'},
            ]}
            renderItem={({item}) => <Card style={{width: SCREEN_WIDTH*.85, flexDirection: 'row', shadowOpacity: 10, paddingBottom: 5, paddingRight: 20 }}><Text style={styles.item}>{item.id}</Text><Text style={[styles.item]}>{item.date}</Text></Card>}
            />

            </View>
            </ScrollView>
);}
const IceBreakers= () =>{
    return (
        <ScrollView
                style={[styles.scrollViewStyle]}
                bounces={false}
                flexDirection='row'
            >
 
            <View style={styles.container}>
            <FlatList
            numColumns={2}
            bounces={false}
            style={{alignContent:'center', }}
            data={[
                {key: 'Devin', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                {key: 'Jackson', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                {key: 'James', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                {key: 'Joel', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                {key: 'John', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                {key: 'Jillian', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
            ]}
            renderItem={({item}) => <TouchableOpacity style={[styles.item,{borderRadius:10, padding:40, shadowRadius: 5, }]}>
            <Card rounded style={{flex: 1, shadowOpacity: 10, margin: 10, borderRadius: 10, alignItems: 'center' }}>
                    <Image source={{uri:item.img}} style={{width:35, height: 35}}/>
                <CardItem footer bordered>
                    <Text style={[{height:18}]}>{item.key}</Text>
                </CardItem>
            </Card></TouchableOpacity>}
            />

            </View>
            </ScrollView>
        
    );
}
export class HangoutLanding extends React.Component {

    render() {
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            <View style={{height: SCREEN_HEIGHT*.93, width: SCREEN_WIDTH, alignItems: 'center'}}>
            <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.125}}> 
                <Left>
                    <Button transparent>
                        <H2 style={{fontFamily: 'montserrat-bold', color: '#818282', paddingLeft: 20}}>Hangouts</H2>
                    </Button>
                </Left>
                <Right style={{alignItems:'center'}}>
                    <Button transparent style={{paddingRight: 30}}>
                        <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                    </Button>
                </Right>
            </Header>
            <Banner text='Hangouts' source='https://d31l02nbp0owar.cloudfront.net/m/t/198/1977194/a-0120.jpg' />
                {<ListOfHangouts></ListOfHangouts>}

            </View>
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
        padding: 10,
        height: 44,
        width: SCREEN_WIDTH*.40
    },
});