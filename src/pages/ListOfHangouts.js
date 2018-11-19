import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image, ListView, TouchableOpacity} from 'react-native';
import { Header, Left, Button, Body, Right, Title, Card, H2, CardItem} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";
import {HangoutLanding} from "../pages/HangoutLanding";

export class ListOfHangouts extends React.Component {
    render() {
        return (
            <HangoutLanding>
                <ScrollView
                        style={styles.scrollViewStyle}
                        bounces={false}
                    >

                    <View style={styles.container}>
                    <FlatList
                    data={[
                        {key: 'Pot Luck', date: 'January, 10, 2019'},
                        {key: 'Jackson Memorial', date: 'Feburary 10, 2019'},
                        {key: 'James Albright Foundation', date: 'March 10, 2019'},
                        {key: 'Starbucks MeetUp', date: 'April 10, 2019'},
                        {key: 'JFK Library', date: 'May 10, 2019'},
                        {key: 'Jillian Fitness', date: 'June 10, 2019'},
                        {key: 'Jimmy Kimell Watch Party', date: 'July 10, 2019'},
                        {key: 'Julie\'s Birhtday', date: 'August 10, 2019'},
                        {key: 'Ronald McDonald Foundation', date: 'September 10, 2019'},
                    ]}
                    renderItem={
                        ({item}) => <Card style={{width: SCREEN_WIDTH*.85, flexDirection: 'row', shadowOpacity: 10, paddingBottom: 5, paddingRight: 20 }}>
                            <Text style={styles.item}>{item.key}</Text>
                            <Text style={[styles.item]}>{item.date}</Text>
                        </Card>
                    }
                    />

                    </View>
                </ScrollView>
            </HangoutLanding>
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
