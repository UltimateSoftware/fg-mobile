import React, {Component, Navigation, useState, useReducer} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, AppRegistry } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import useEvent from '../domain/models/Event';
import useChapter from '../domain/models/Chapter';
import DatePicker from 'react-native-datepicker';

const NewEventFormComponent = () => {
    const [event, eventActions] = useEvent();
    const [chapter, chapterActions] = useChapter();
    const {Chapter, Status} = chapter;
    let formInitState = {
        title: '',
        description: '',
        date: '',
        state: '',
        location: '',
        icebreakers: '',
    }

    function reduceForm(state, action){
        switch(action.type){
            case 'title':
                return {...state, title: action.change}
            case 'description':
                return {...state, description: action.change}
            // case 'date':
            //     return {...state, date: action.change}
            case 'state':
                return {...state, state: action.change}
            case 'location':
                return {...state, location: action.change}
            case 'icebreakers':
                return {...state, icebreakers: action.change}
        }

    }

    const [formState, dispatch] = useReducer(reduceForm, formInitState)

    buttonClickListener = (event) => {eventActions.addSingleEvent(formState) }

    return (
        <View style={{alignSelf:'stretch', margin:10}}> 
            <Text style={styles.header}>Create New Event</Text>
            <TextInput 
                style={styles.textinput}
                placeholder="Title" 
                underlineColorAndroid={'transparent'}
                onChangeText={(textChange) => {dispatch({type: 'title', change: textChange})}}
                />
            <TextInput
                style={styles.textinput}
                placeholder="Description"
                underlineColorAndroid={'transparent'}
                onChangeText={(textChange) => {dispatch({type: 'description', change: textChange})}}
                />
            <DatePicker
                style={{width: 200}}
                date={new Date()}
                mode="date"
                placeholder="select date"
                format="MM-DD-YYYY"
                minDate="05-01-2016"
                maxDate="06-01-2020"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => {this.setState({date: date})}}
            />
            <TextInput
                style={styles.textinput}
                placeholder="State"
                underlineColorAndroid={'transparent'}
                onChangeText={(textChange) => {dispatch({type: 'state', change: textChange})}}
                />
            <TextInput
                style={styles.textinput}
                placeholder="Location"
                underlineColorAndroid={'transparent'}
                onChangeText={(textChange) => {dispatch({type: 'location', change: textChange})}}
                />
            <TextInput
                style={styles.textinput}
                placeholder="Icebreakers"
                underlineColorAndroid={'transparent'}
                onChangeText={(textChange) => {dispatch({type: 'icebreakers', change: textChange})}}
                />
            <TouchableOpacity onPress={this.buttonClickListener} style={{ margin: 10, alignItems: 'center', borderRadius: 100, backgroundColor: '#F313B7', padding: 20, width: '50%', alignSelf: 'center'}}>
                <Text style={{ height: 17, width: 42, color: 'white', fontSize: 12, fontFamily: 'opensans-bold' }}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',    
        color: '#F313B7',
        paddingBottom: 10,
        paddingTop: 10,
        // marginBottom: 5,
        marginTop: 5,
        // borderBottomColor: 'lavender',
        // borderBottomWidth: 1,
        fontFamily: 'montserrat-light',
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        fontFamily: 'montserrat-regular',
        fontSize: 14,
        color: 'dimgrey',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    }
});

export default NewEventFormComponent;