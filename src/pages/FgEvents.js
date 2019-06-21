import React, {Component, useState} from 'react';
import {Modal, Platform, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import useEvents from '../domain/models/Event';

import HamburgerIcon from '../components/primatives/HamburgerIcon';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../SharedConstants';
import { CalendarItemPopulated, CalendarItemEmpty } from '../components/atoms/CalendarItem';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CreateEvent} from '../domain/services/ModaleExample';

function FgEvents() {
    const [events, eventActions] = useEvents()
    const {Event, Status} = events;
    let date = new Date();
    return (
        <View style={styles.container}>
        
        <Agenda 
        // fmt for title, time, desc
        // multi-day events
        items={{
            '2019-06-16': [],
            '2019-06-17': [{text: 'item 17 - any js object'}],
            '2019-06-18': [{text: 'item 18 - any js object'}],
            // '`${date.getFullYear()}`-`${date.getMonth()}`-`${date.getDate()}`': [{text: 'item 1 - any js object'}],
            '2019-06-19': [{text: 'item 19.1 - any js object'}, {text: 'item 19.2 - another one'}, {text: 'item 19.3 - another one'}, {text: 'item 19.4 - another one'}, {text: 'item 19.5 - another one'}],
            '2019-06-20': [{text: 'item 20 - any js object'}],
            '2019-06-21': [],
            '2019-06-22': [{text: 'item 22 - any js object'}]
        }}

        renderItem={(item, firstItemInDay) => {
            return(<CalendarItemPopulated text={item.text}/>);
        }}
        renderEmptyDate={() => {
            return(<CalendarItemEmpty/>);
        }}
        rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text
        }}
        />

        </View>
    );
}

//Stylesheet for New Event button
const otherStyles = StyleSheet.create({
//Button text style
    customBtnText: {
        fontFamily: 'opensans-regular',
        fontSize: 35,
        fontWeight: '600',
        color: "deepskyblue",
    },

 //Button background style
    // customBtnBG: {
    // backgroundColor: "deepskyblue",
    // paddingHorizontal: 5,
    // },

    // container: {},

    buttonStyle: {
        marginLeft: 15,
        borderRadius: 50,
    }
});

//Modal popup stuff
state = { modalVisible: false };
FgEvents.setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
}

FgEvents.navigationOptions = () => {
    return {
        headerRight:
        <HamburgerIcon/>,
        headerLeft:
        <View>
            {/* <TouchableOpacity style={otherStyles.customBtnBG} style={otherStyles.buttonStyle}>
                <Text style={otherStyles.customBtnText} title='Create new event'>+</Text>
            </TouchableOpacity> */}
            {/* Modal popup stuff */}
            <View style={{marginTop: 22}}>
                { <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                { <View style={{marginTop: 22}}>
                    <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.toggleModle(false);
                        }}>
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                    </View>
                </View> }
                </Modal> }

                <TouchableOpacity
                onPress={() => {
                    FgEvents.setModalVisible(true);
                }}>
                <Text>Show Modal</Text>
                </TouchableOpacity>
            </View>
        </View>
    };
};

export default FgEvents

// ??????? fix
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'pink'
        // flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
        // margin: 0
        },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        }
});

