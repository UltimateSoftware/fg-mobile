import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {ProfileBanner} from '../components/molecules/ProfileBanner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useProfile from '../domain/models/Profile';
import { Avatar } from '../components/atoms/Avatar';

function FgProfile() {

    const [profile, profileActions] = useProfile()
    // See Profile definition in domain/models/Profile
    // any new information which the backend provides needs to be reflected in domain/models/Profile
    const {Profile, Status} = profile; // Use Profile to object to populate page
    
    const imgUri = 'fearlesslyGirl_logo.jpg';
    var members = [{name: "test1", source: "fearlesslyGirl_logo.jpg"}, {name: "test2", source: "fearlesslyGirl_logo.jpg"}, {name: "test3", source: "fearlesslyGirl_logo.jpg"}, {name: "test4", source: "fearlesslyGirl_logo.jpg"}, {name: "test5", source: "fearlesslyGirl_logo.jpg"}, {name: "test6", source: "fearlesslyGirl_logo.jpg"}]
    let renderMembers = [];
    for (i = 0; i < 4; i++) {
      renderMembers.push(
        <View key={i}>
          <Avatar avatarSize='small' name={members[i].name} source={members[i].source} />
          <Text style={[styles.textContainer, styles.nameLabel]}>{members[i].name}</Text>
        </View>
      );
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <ProfileBanner backImgUri={imgUri} imgUri={imgUri} lineOneText="test" lineTwoText="Thre" lineThreeText="t"/>
                <Inspiration title={"Inspiration"} inspiration={"lorem ipsum test text messages"}/>
                <Inspiration title={"Chapter Sisters"} inspiration={""}/>

                <View style={styles.chapterMembersRow}>{renderMembers}</View>

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
        },
    chapterMembersRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
        },
    nameLabel: {
        fontFamily: 'montserrat-light',
        fontSize: 18,
      },
    textContainer: {
        color: '#818282',
        textAlign: 'center',
      },
});

