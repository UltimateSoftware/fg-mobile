import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Banner} from '../atoms/Banner';
import {ProfileFrame} from '../primatives/ProfileFrame';

export function EditableProfileBanner(props) {

    return (
        <View style={styles.container}>
            <Banner color={styles.color} source={props.backImgUri}>
                <ProfileFrame source={props.imgUri} size={'m'}/>
            </Banner>
            <TextInput editable={props.editMode} style={styles.headerText}>
              {props.lineOneText}
            </TextInput>
            <TextInput editable={props.editMode} style={styles.subheadingText}>
              {props.lineTwoText}
            </TextInput>
            <TextInput editable={props.editMode} style={styles.footnoteText}>
              {props.lineThreeText}
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        },
    headerText: {
        fontSize: 20,
        fontFamily: 'opensans-light',
        marginTop: 15
    },
    subheadingText: {
        fontSize: 16,
        fontFamily: 'opensans-light',
        marginTop: 0
    },
    footnoteText: {
        fontSize: 12,
        fontFamily: 'opensans-light',
        marginTop: 0
    }
});