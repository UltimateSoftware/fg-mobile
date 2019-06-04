import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useChapter from '../domain/models/Chapter';

function oneOff(){

}

function FgChapter() {

    const [chapter, chapterActions] = useChapter()
    const {Chapter, Status} = chapter;
    console.log(Status);
    console.log(chapterActions)
    
    const imgUri = 'fearlesslyGirl_logo.jpg';
    
    return (
        <View style={styles.container}>
            <Banner color={"#6ED4C8"} source={imgUri}>
                <ProfileFrame source={imgUri} size={'l'}/>
            </Banner>
            <Inspiration title={"my title"} inspiration={"some text"}/>
            <Button title="something" onPress={() => {chapterActions.updateChapter()}}/>
            {<Text >{Status == 'READY' ? Chapter.schoolName : 'loading'}</Text> }
        </View>
    );
}

FgChapter.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default FgChapter

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

