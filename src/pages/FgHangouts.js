import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {useIsLoading} from '../hooks/useIsLoading';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useChapter from '../domain/models/Chapter';



function FgHangouts() {
    const [chapter, chapterActions] = useChapter()
    const {Chapter, Status} = chapter;

    const imgUri = 'fearlesslyGirl_logo.jpg';
    
    return (
        <View style={styles.container}>
            <Inspiration title={"my title"} inspiration={"some text"}/>
            {<Text >{Status}</Text> }
        </View>
    );
}

FgHangouts.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default FgHangouts

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

