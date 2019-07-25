import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image} from 'react-native';
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

    const handlerViewAllButton = () => {
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

    const handlerSaveButton = () => {
        handleEditableToggle();
        // send new info to backend
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

    const settingsSVG = '<svg id="gear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs><style>.cls-1 {fill: #9a9a9a;}</style></defs><g id="Group_685" data-name="Group 685" transform="translate(0 0)"><path id="Path_776" data-name="Path 776" class="cls-1" d="M15.645,6.608l-1.835-.451a6.058,6.058,0,0,0-.423-1.008l.855-1.424a.469.469,0,0,0-.071-.573L12.845,1.826a.467.467,0,0,0-.573-.07l-1.426.855a6.039,6.039,0,0,0-1-.42L9.392.355A.469.469,0,0,0,8.938,0H7.063a.468.468,0,0,0-.455.355S6.3,1.636,6.157,2.19a6.018,6.018,0,0,0-1.064.453L3.614,1.756a.47.47,0,0,0-.573.07L1.716,3.152a.469.469,0,0,0-.071.573L2.56,5.252a6.04,6.04,0,0,0-.369.9L.355,6.608A.469.469,0,0,0,0,7.063V8.938a.468.468,0,0,0,.355.455l1.836.451a6.046,6.046,0,0,0,.431,1.025L1.8,12.232a.469.469,0,0,0,.07.573L3.2,14.131a.471.471,0,0,0,.573.07l1.367-.819a6.039,6.039,0,0,0,1.017.428l.451,1.835A.468.468,0,0,0,7.063,16H8.938a.469.469,0,0,0,.455-.355l.451-1.835a5.954,5.954,0,0,0,1.04-.442l1.389.833a.469.469,0,0,0,.573-.07l1.326-1.326a.469.469,0,0,0,.071-.573l-.843-1.4a6,6,0,0,0,.412-.985l1.835-.451A.469.469,0,0,0,16,8.938V7.063A.469.469,0,0,0,15.645,6.608ZM8,11.281A3.281,3.281,0,1,1,11.281,8,3.285,3.285,0,0,1,8,11.281Z" transform="translate(0 0)"/></g></svg>';
    
    editButtons = !editMode ? 
    <TouchableOpacity style={styles.fabButton} onPress={event => handleEditableToggle()}> 
        <Image 
            source={require('../../assets/settings-gear.png')}
        />
    </TouchableOpacity> :
    <View>
        <Button title="choose banner file" onPress={event => chooseBannerFile()} textStyle={{fontSize: 14}}/>
        <Button title="choose avatar file" onPress={event => chooseAvatarFile()} textStyle={{fontSize: 14}}/>
    </View>;
    saveButton = editMode ? 
    <TouchableOpacity style={styles.buttonStyle} textStyle={{fontSize: 14}} onPress={event => handlerSaveButton()}>
        <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity> : null;
    viewAllButton = !viewAll ?
    <TouchableOpacity style={styles.buttonStyle} textStyle={{fontSize: 14}} onPress={event => handlerViewAllButton()}>
        <Text style={[styles.buttonText, fontSize=16]}>View All</Text>
    </TouchableOpacity> : null;

    return profile.Status == "READY" ? (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <EditableProfileBanner ref={editableProfileBanner} editMode={editMode} backImgUri={defaultImage2} imgUri={imgUri} lineOneText={profile.Profile.Profile.firstName + " " + profile.Profile.Profile.lastName} lineTwoText={profile.Profile.Profile.schoolName} lineThreeText={"Class of " + profile.Profile.Profile.gradYear}/>
                    {saveButton}
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
            <View style={styles.fabView}>
                {editButtons} 
            </View>
        </View>
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
    },
    buttonStyle: {
        marginTop: 10,
        padding: 15,
        paddingHorizontal: 70,
        backgroundColor: '#fd17b5',
        borderRadius: 25
    },
    buttonText: {
        fontFamily: 'montserrat-regular',
        fontSize: 15,
        color: 'white',
        fontWeight : '500'
    },
    fabButton: {
        margin: 5,
        padding: 10,
        width: 45,
        height: 45,
        backgroundColor: '#fd17b5',
        borderRadius: 25
    },
    fabView: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
});

