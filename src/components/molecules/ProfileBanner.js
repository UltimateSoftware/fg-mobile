import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native'
import {Banner} from '../atoms/Banner';
import {ProfileFrame} from '../primatives/ProfileFrame';

export function ProfileBanner(props) {
    return (
        <View style={styles.container}>
            <Banner color={styles.color} source={props.backImgUri}>
                <ProfileFrame source={props.imgUri} size={'l'}/>
            </Banner>
            <Text style={styles.headerText}>
              {props.lineOneText}
            </Text>
            <Text style={styles.subheadingText}>
              {props.lineTwoText}
            </Text>
            <Text style={styles.footnoteText}>
              {props.lineThreeText}
            </Text>

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