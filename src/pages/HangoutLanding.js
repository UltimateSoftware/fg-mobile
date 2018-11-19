import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image, ListView, TouchableOpacity} from 'react-native';
import { Header, Left, Button, Body, Right, Title, Card, H2, CardItem} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";
// import {HangoutsNav} from "../Navigators/HangoutsNav";

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent

export class HangoutLanding extends React.Component {

    render() {
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            <View style={{height: SCREEN_HEIGHT*.93, width: SCREEN_WIDTH, alignItems: 'center'}}>
            <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.1}}> 
                <Left>
                    <Button transparent>
                        <H2 style={{fontFamily: 'montserrat-regular', paddingLeft: 20}}>Hangouts</H2>
                    </Button>
                </Left>
                <Right style={{alignItems:'center'}}>
                    <Button transparent style={{paddingRight: 30}}>
                        <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                    </Button>
                </Right>
            </Header>
            <Banner text='Hangouts' source='https://d31l02nbp0owar.cloudfront.net/m/t/198/1977194/a-0120.jpg' />
                {this.props.children}
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
