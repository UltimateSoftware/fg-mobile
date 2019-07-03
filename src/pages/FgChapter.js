import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useChapter from '../domain/models/Chapter';
import {ProfileBanner} from '../components/molecules/ProfileBanner';
import {ChapterHistoryComponent} from '../components/ChapterHistoryComponent';
import {ChapterLeadershipComponent} from '../components/ChapterLeadershipComponent';
import {ChapterMissionComponent} from '../components/ChapterMissionComponent';
import {ChapterFGBylawsComponent} from '../components/ChapterFGBylawsComponent';
import {ChapterBylawsComponent} from '../components/ChapterBylawsComponent';

function FgChapter() {

    const [chapter, chapterActions] = useChapter()
    // See Chapter definition in domain/models/Chapter
    // any new information which the backend provides needs to be reflected in domain/models/Chapter
    const {Chapter, Status} = chapter; // Use Chapter to object to populate page
<<<<<<< HEAD
    
    // const imgUri = 'fearlesslyGirl_logo.jpg';
    const imgUri = <ProfileBanner />;

    const fillerBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    
    const bylaws = [
        {id: 0, header: "I. Lorem Ipsum", body: fillerBody},
        {id: 1, header: "II. Lorem Ipsum", body: fillerBody},
        {id: 2, header: "III. Lorem Ipsum", body: fillerBody},
        {id: 3, header: "IV. Lorem Ipsum", body: fillerBody},
        {id: 4, header: "V. Lorem Ipsum", body: fillerBody},
    ];

    const founders = [
        {id: 0, image: imgUri, name: "Name here", position: "Position here"},
        {id: 1, image: imgUri, name: "Name here", position: "Position here"},
    ];

    const leaders = [
        {id: 0, image: imgUri, name: "Name here"},
        {id: 1, image: imgUri, name: "Name here"},
        {id: 2, image: imgUri, name: "Name here"},
        {id: 3, image: imgUri, name: "Name here"},
    ]
=======

    const imgUri = 'fearlesslyGirl_logo.jpg';
>>>>>>> ce6c998... added service

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* REPLACE WITH ProfileBanner COMPONENT in components/molecules/ProfileBanner */}
                <Banner color={"#6ED4C8"} source={imgUri}>
                    <ProfileFrame source={imgUri} size={'l'}/>
                </Banner>
                <Inspiration title={"Chapter name"} inspiration={"Chapter number"}/>

                <ChapterHistoryComponent body={fillerBody} profiles={founders} />
                <ChapterLeadershipComponent body={fillerBody} profiles={leaders} />
                <ChapterMissionComponent body={fillerBody} />
                <ChapterFGBylawsComponent bylaws={bylaws} />
                <ChapterBylawsComponent bylaws={bylaws} />
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
});
