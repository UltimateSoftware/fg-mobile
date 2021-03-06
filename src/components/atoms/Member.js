import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Avatar } from './Avatar';
/* 
This component represents a member to be rendered in a list/grid view.

Renders an Avatar with the name and school of the chapter sister.
*/

export function Member({imgSrc, name, school}) {
    return (
        <View style={styles.item}>
            <Avatar avatarSize='small' name={name} source={imgSrc}/>
            <View style={styles.chapterSisterTitle}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.schoolText}>{school}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chapterSisterTitle: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 7,
    },
    nameText: {
        fontFamily: 'montserrat-light',
        fontSize: 15,
    },
    schoolText: {
        fontFamily: 'montserrat-regular',
        fontSize: 13,
        textAlign: 'center'
    },
    item: {
        marginBottom:13
    }
});