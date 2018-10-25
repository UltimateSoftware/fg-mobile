import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image} from 'react-native';
import { Header, Left, Button, Body, Right, Title, Card, H3} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent

export class HangoutLanding extends React.Component {

    render() {
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            <View style={{height: SCREEN_HEIGHT*.93, width: SCREEN_WIDTH}}>
            <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.1}}> 
                <Left>
                    <Button transparent>
                        <H3 style={{fontFamily: 'montserrat-regular'}}>Hangouts</H3>
                    </Button>
                </Left>
                <Right style={{alignItems:'center'}}>
                    <Button transparent>
                        <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                    </Button>
                </Right>
            </Header>
            <ScrollView
                style={styles.scrollViewStyle}
            >
            <Banner text='lol' source='https://d31l02nbp0owar.cloudfront.net/m/t/198/1977194/a-0120.jpg'>
            <View style={{flex: 1}}>
                <Text>lol</Text>
            </View>
            </Banner>
            <View style={styles.container}>
            <FlatList
            data={[
                {key: 'Devin', date: '1,10,11'},
                {key: 'Jackson', date: '1,10,11'},
                {key: 'James', date: '1,10,11'},
                {key: 'Joel', date: '1,10,11'},
                {key: 'John', date: '1,10,11'},
                {key: 'Jillian', date: '1,10,11'},
                {key: 'Jimmy', date: '1,10,11'},
                {key: 'Julie', date: '1,10,11'},
            ]}
            renderItem={({item}) => <Card style={{width: SCREEN_WIDTH*.9, flexDirection: 'row', shadowOpacity: 10 }}><Text style={styles.item}>{item.key}</Text><Text style={styles.item}>{item.date}</Text></Card>}
            />

            </View>
            </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    scrollViewStyle: {
        opacity: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT*.8

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
    nameLabel: {
        fontFamily: 'montserrat-light',
        fontSize: 24
    },
    schoolLabel: {
        fontFamily: 'open-sans-regular',
        fontSize: 16
    },
    gradYearLabel: {
        fontFamily: 'open-sans-regular',
        fontSize: 14
    },
    inspirationTitle: {
        position: 'absolute',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    inspirationLabel: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#818282'
    },
    inspirationLine: {
        position: 'relative',
        borderBottomColor:'#818282',
        borderBottomWidth:1,
        height:'60%',
        width:'32%'
    },
    inspirationBlock: {
        fontFamily: 'open-sans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        position: 'absolute',
        margin: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        width: SCREEN_WIDTH*.30
    },
});
