import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useProfile from '../domain/models/Profile';

function FgProfile() {

    const [profile, profileActions] = useProfile()
    // See Profile definition in domain/models/Profile
    // any new information which the backend provides needs to be reflected in domain/models/Profile
    const {Profile, Status} = profile; // Use Profile to object to populate page
    
    const imgUri = 'fearlesslyGirl_logo.jpg';
    
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* REPLACE WITH ProfileBanner COMPONENT in components/molecules/ProfileBanner */}
                <Banner color={"#6ED4C8"} source={imgUri}> 
                    <ProfileFrame source={imgUri} size={'l'}/>
                </Banner>
                <Inspiration title={"my title"} inspiration={"some text"}/>
                {/* NEED TO RENDER PHOTO OF CHAPTER MEMBER */}
            </View>
        </ScrollView>
    );
}

FgProfile.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default FgProfile

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

