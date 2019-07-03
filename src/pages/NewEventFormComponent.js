import React, {Component, Navigation, useState, useReducer} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, AppRegistry } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import useEvent from '../domain/models/Event';
import useChapter from '../domain/models/Chapter';

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

    // 
    function reduceForm(state, action){
        switch(action.type){
            case 'title':
                return {...state, title: action.change}
            case 'description':
                return {...state, description: action.change}
            case 'date':
                return {...state, date: action.change}
            case 'state':
                return {...state, state: action.change}
            case 'location':
                return {...state, location: action.change}
            case 'icebreakers':
                return {...state, icebreakers: action.change}
        }

    }

    const [formState, dispatch] = useReducer(reduceForm, formInitState)

    buttonClickListener = (event) => { eventActions.addSingleEvent(formState) }

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
            <TextInput
                style={styles.textinput}
                placeholder="Date"
                underlineColorAndroid={'transparent'}
                onChangeText={(textChange) => {dispatch({type: 'date', change: textChange})}}
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
            <TouchableOpacity onPress={this.buttonClickListener} style={{ margin: 10, alignItems: 'center'}}>
                <Text style={{
                    backgroundColor: 'cornflowerblue', color: 'white', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
//{style={{flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',    
        color: 'cornflowerblue',
        paddingBottom: 10,
        paddingTop: 10,
        // marginBottom: 5,
        marginTop: 5,
        // borderBottomColor: 'lavender',
        // borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'dimgrey',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    }
});

export default NewEventFormComponent;