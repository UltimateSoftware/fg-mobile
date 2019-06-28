import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {ProfileBanner} from '../components/molecules/ProfileBanner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import Grid from 'react-native-grid-component'
import useProfile from '../domain/models/Profile';
import { Avatar } from '../components/atoms/Avatar';

function FgProfile() {

    const [profile, profileActions] = useProfile()
    // See Profile definition in domain/models/Profile
    // any new information which the backend provides needs to be reflected in domain/models/Profile
    const {Profile, Status} = profile; // Use Profile to object to populate page

    const [viewAll, setViewAll] = useState(false);

    const imgUri = 'fearlesslyGirl_logo.jpg';
    const allMembers = [{name: "test1", source: "fearlesslyGirl_logo.jpg"}, {name: "test2", source: "fearlesslyGirl_logo.jpg"}, {name: "test3", source: "fearlesslyGirl_logo.jpg"}, {name: "test4", source: "fearlesslyGirl_logo.jpg"}, {name: "test5", source: "fearlesslyGirl_logo.jpg"}, {name: "test6", source: "fearlesslyGirl_logo.jpg"}]
    const [members, setMembers] = useState(allMembers.slice(0,4));
    var renderMembers = []

    _renderMember = (member, i) => (
        <View style = {styles.member} key={i}>
            <Avatar avatarSize='small' name={member.name} source={member.source} />
            <Text style={[styles.textContainer, styles.nameLabel]}>{member.name}</Text>
        </View>
    )

    const handleButton = () => {
        setViewAll(true)
        setMembers(allMembers);
    };

    button = !viewAll ?
    <Button onPress={event => handleButton()} title="View All"></Button> : null;

    return (
        <ScrollView>
            <View style={styles.container}>
                <ProfileBanner backImgUri={imgUri} imgUri={imgUri} lineOneText="test" lineTwoText="Thre" lineThreeText="t"/>
                <Inspiration title={"Inspiration"} inspiration={"lorem ipsum test text messages"}/>
                <View style={[styles.titleView, {marginTop: 20}]}>
                    <View style={styles.titleLine}/>
                    <Text style={styles.titleLabel}>Chapter Sisters</Text>
                    <View style={styles.titleLine}/>
                </View>
                <Grid style={styles.list} renderItem={this._renderMember} keyExtractor={(item, index) => index.toString()} data={members} refreshing= {false} numColumns={4}/>
                {button}

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
    member: {
        margin: 7,
    },
    list: {
        flex: 1,
    },
    nameLabel: {
        fontFamily: 'montserrat-light',
        fontSize: 18,
    },
    textContainer: {
        color: '#818282',
        textAlign: 'center',
    },
    titleView: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
    titleLabel: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#818282'
    },
    titleLine: {
        position: 'relative',
        borderBottomColor:'#818282',
        borderBottomWidth:1,
        height:'60%',
        width:'32%'
    }
});

