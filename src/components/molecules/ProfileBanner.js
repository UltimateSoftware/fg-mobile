import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native'
import {Banner} from '../atoms/Banner';
import {ProfileFrame} from '../primatives/ProfileFrame';

export function ProfileBanner(props) {
    console.log(props.imgUri, props.backImgUri)

    return (
        <View style={styles.container}>
            <Banner color={styles.color} source={props.backImgUri}>
                <ProfileFrame source={props.imgUri} avatarSize={'s'}/>
                <View style={{alignSelf: "center", marginTop: 12}}>
                    {props.children}
                </View>
            </Banner>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
});