import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList, TextInput} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {EditableProfileBanner} from '../components/molecules/EditableProfileBanner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import Grid from 'react-native-grid-component'
import {EditableParagraphBlock} from '../components/primatives/EditableParagraphBlock';
import useProfile from '../domain/models/Profile';
import useChapter from '../domain/models/Chapter'
import {MemberGrid} from '../components/molecules/MemberGrid';
import ImagePicker from 'react-native-image-picker'

import defaultImage from '../../assets/Heart_SVG.png'
import defaultImage2 from '../../assets/fearlesslyGirl_logo.jpg'

function FgProfile() {

    const [profile, profileActions] = useProfile()
    // See Profile definition in domain/models/Profile
    // any new information which the backend provides needs to be reflected in domain/models/Profile
    const {Profile, Status} = profile; // Use Profile to object to populate page

    const [viewAll, setViewAll] = useState(false);

    const editableParagraphBlock = React.createRef();
    const editableProfileBanner = React.createRef()

    const [imgUri, setImgUri] = useState(defaultImage);

    const allMembers = [{name: "test1", source: defaultImage, school: "test school"}, {name: "test2", source: defaultImage, school: "test school"}, {name: "test3", source: defaultImage, school: "test school"}, {name: "test4", source: defaultImage, school: "test school"}, {name: "test5", source: defaultImage, school: "test school"}, {name: "test6", source: defaultImage, school: "test school"}, {name: "test6", source: defaultImage, school: "test school"}, {name: "test6", source: defaultImage, school: "test school"}, {name: "test7", source: defaultImage, school: "test school"}, {name: "test6", source: defaultImage, school: "test school"}, {name: "test8", source: defaultImage, school: "test school"}]
    const [members, setMembers] = useState(allMembers.slice(0,4));
    const [editMode, toggleEditMode] = useState(false)

    const handleButton = () => {
        setViewAll(true)
        setMembers(allMembers);
    };

    useEffect(() => {
        //componentDidMount
        (
          async () => {
            await profileActions.loadProfile("99999999-ffff-4a96-b827-fa80954d9cff");
          }
        )();
    
        /*return (
          () => {
            //componentDidUnmount
          }
        )*/
      }, []);


    const handleEditableToggle = () => {
        toggleEditMode(!editMode)
        editableParagraphBlock.current.handleToggleEditMode();
        editableProfileBanner.current.handleToggleEditMode()
        console.log(profile)
    }

    chooseBannerFile = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }
    
        ImagePicker.showImagePicker(options, response => {
            if(response.didCancel) {
                console.log("user canncelled image picker")
            } else if (response.error){
                console.log('image picker error: ', response.error)
            } else if (response.customButton) {
                alert(response.customButton)
            } else {
                source = {uri: response.uri}
                editableProfileBanner.current.handleEditBanner(source)
            }

        })

    }

    chooseAvatarFile = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }
    
        ImagePicker.showImagePicker(options, response => {
            if(response.didCancel) {
                console.log("user canncelled image picker")
            } else if (response.error){
                console.log('image picker error: ', response.error)
            } else if (response.customButton) {
                alert(response.customButton)
            } else {
                source = {uri: response.uri}
                editableProfileBanner.current.handleEditAvatar(source)
            }

        })

    }
    
    editButtons = !editMode ? <Button textStyle={{fontSize: 14}} onPress={event => handleEditableToggle()} title="Edit"/> :
    <View>
        <Button textStyle={{fontSize: 14}} onPress={event => handleEditableToggle()} title="Edit"/>
        <Button title="choose banner file" onPress={event => chooseBannerFile()} textStyle={{fontSize: 14}}/>
        <Button title="choose avatar file" onPress={event => chooseAvatarFile()} textStyle={{fontSize: 14}}/>
    </View>;
    viewAllButton = !viewAll ?
    <Button onPress={event => handleButton()} title="View All"></Button> : null;

    return profile.Status == "READY" ? (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.editButton}>
                    {editButtons}
                </View>
                <EditableProfileBanner ref={editableProfileBanner} editMode={editMode} backImgUri={defaultImage2} imgUri={imgUri} lineOneText={profile.Profile.Profile.firstName + " " + profile.Profile.Profile.lastName} lineTwoText={profile.Profile.Profile.schoolName} lineThreeText={"Class of " + profile.Profile.Profile.gradYear}/>
                <Inspiration title={"Inspiration"}>
                    <EditableParagraphBlock ref={editableParagraphBlock} inspiration={profile.Profile.Profile.inspiration}/>
                </Inspiration>
                <View style={[styles.titleView, {marginTop: 20}]}>
                    <View style={styles.titleLine}/>
                    <Text style={styles.titleLabel}>Chapter Sisters</Text>
                    <View style={styles.titleLine}/>
                </View>
                <MemberGrid members={members}/>
                {viewAllButton}

            </View>
        </ScrollView>
    ) : (
        <View>
        </View>
    )
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
    editButton: {
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
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
        paddingBottom: 20
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

