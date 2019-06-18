import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Banner} from '../atoms/Banner';
import {ProfileFrame} from '../primatives/ProfileFrame';

export function ProfileBanner(props) {
    return (
        <View style={styles.container}>
            <Banner color={styles.color} source={props.backImgUri}>
                <ProfileFrame source={props.imgUri} size={'l'}/>
            </Banner>
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
        }
});