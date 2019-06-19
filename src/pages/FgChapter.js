import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useChapter from '../domain/models/Chapter';
import {ProfileBanner} from '../components/molecules/ProfileBanner';

function oneOff(){

}

function FgChapter() {

    const [chapter, chapterActions] = useChapter()
    // See Chapter definition in domain/models/Chapter
    // any new information which the backend provides needs to be reflected in domain/models/Chapter
    const {Chapter, Status} = chapter; // Use Chapter to object to populate page
    
    // const imgUri = 'fearlesslyGirl_logo.jpg';
    const imgUri = <ProfileBanner />;
    
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* REPLACE WITH ProfileBanner COMPONENT in components/molecules/ProfileBanner */}
                <Banner color={"#6ED4C8"} source={imgUri}> 
                    <ProfileFrame source={imgUri} size={'l'}/>
                </Banner>
                <Inspiration title={"Our history"} inspiration={"some text"}/>
                <Inspiration title={"Student leadership"} inspiration={"some text"}/>
                <Inspiration title={"Our mission"} inspiration={"some text"}/>
                <Inspiration title={"FearlesslyGirl bylaws"} inspiration={
                    <>
                        <Text>I. Lorem Ipsum</Text>
                        <Text>II. Lorem Ipsum</Text>
                        <Text>III. Lorem Ipsum</Text>
                        <Text>IV. Lorem Ipsum</Text>
                        <Text>V. Lorem Ipsum</Text>
                    </>
                }/>
                <Inspiration title={"Chapter bylaws"} inspiration={
                    <React.Fragment>
                    <Text>I. Lorem Ipsum</Text>
                    <Text>II. Lorem Ipsum</Text>
                    <Text>III. Lorem Ipsum</Text>
                    <Text>IV. Lorem Ipsum</Text>
                    <Text>V. Lorem Ipsum</Text>
                </React.Fragment>
                }/>
                {/* NEED TO RENDER PHOTO OF CHAPTER MEMBER */}
            </View>
        </ScrollView>
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

