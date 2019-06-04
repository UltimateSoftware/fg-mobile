import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {useIsLoading} from '../hooks/useIsLoading';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import {ChapterManager} from '../domain/models/Chapter'

function testIsLoading(){
    return new Promise((resolve) => {
        setTimeout(() => {resolve(true)}, 2000)
    });
}

function FgChapter() {
    useEffect(() => {
        (async () => {
            let loadChapter = await ChapterManager.getChProfile();
            updateChapter(loadChapter);
        })();
        return () => {
        };
    }, [])

    const [chapter, updateChapter] = useState({})

    async function _loadChapter() {
        return new Promise(async (resolve) => {
            let loadChapter = await ChapterManager.getChProfile();
            // error handle the failure to load chapter
            
            console.log('updating chapter');
            updateChapter(loadChapter);
            resolve(true);
        });
    };

    const imgUri = 'fearlesslyGirl_logo.jpg';
    const isLoading = useIsLoading(_loadChapter)
    
    return (
        <View style={styles.container}>
            <Banner color={"#6ED4C8"} source={imgUri}>
                <ProfileFrame source={imgUri} size={'l'}/>
            </Banner>
            <Inspiration title={"my title"} inspiration={"some text"}/>
            {<Text >{isLoading ? chapter.thisField : 'loading'}</Text> }
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

