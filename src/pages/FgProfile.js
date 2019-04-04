import React from 'react';
import {Modal, Button, ScrollView, StyleSheet, Text, View, Alert, TouchableHighlight} from 'react-native';
import {Avatar} from "../components/Avatar";
import {Banner} from "../components/Banner";
import {EditButton} from "../components/EditButton";
import {BANNER_HEIGHT_WIDTH_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/sharedConstants";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {onSignIn, onSignOut} from "../Auth";
import {ProfileForm} from "../components/ProfileForm";
import {FgButton} from "../components/FgButton";
import {AsyncStorage} from 'react-native';
import {GlobalContext} from '../services/GlobalProvider'
import {FgProfileService} from "../services/FgProfileService";

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent

export class FgProfile extends React.Component {

    service = new FgProfileService();

    constructor(props) {
        super(props);
        this.state = {
            loading: 'initial',
            member: null,
            modalVisible: false,
            firstName: null,
            lastName: null,
            schoolName: null,
            gradYear: null,
            inspiration: null,
        };
        this.handleSubmit.bind(this);
        this.handleSignOut.bind(this);
    }

    service = new FgProfileService();

    // Load current signed in member from local storage.
    async loadFgMember() {
        return DataManager.getItemWithKey(SIGNED_IN_MEMBER)
            .catch((error) => console.log("[ERROR - FgProfile > loadFgMember() ]: ", error.message));
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    async componentWillMount() {
        this.setState({loading: 'true'});
        const profileStr = await AsyncStorage.getItem('profile');
        const profileObj = JSON.parse(profileStr);
        this.setState({firstName:profileObj.firstName});
        this.setState({lastName:profileObj.lastName});
        this.setState({schoolName:profileObj.schoolName});
        this.setState({gradYear:profileObj.gradYear});
        this.setState({inspiration:profileObj.inspiration});
        this.setState({loading: 'false'});
    }

    render() {

        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;

        if(this.state.loading === 'initial') {
            return <Text>Initializing</Text>
        }

        if(this.state.loading === 'true') {
            return <Text>Loading</Text>
        }

        return (

            //BANNER and AVATAR need to be integrated with backend//

            <GlobalContext.Consumer>
                {context => (
            //Wrap entire profile in a ScrollView
            <ScrollView style={styles.scrollViewStyle} bounces={false}>
          
                {/* Avatar */}
                <View style={styles.subViewStyle}>
                    <View style={{marginTop: (bannerHeight/2)}}>
                        <Avatar avatarSize={'large'} name={`${this.state.firstName} ${this.state.lastName}`} />
                    </View>
                </View>

                {/* Edit Button */}
                <View style={{position: 'absolute', right: 10, marginTop: (bannerHeight+10)}}>
                    <EditButton 
                        onPress={() => {this.setModalVisible(true);}}/>
                </View>

                {/* Name, School, and Grad Year */}
                <View style={styles.subViewStyle}>
                    <Text style={{marginTop: 20, textAlign: 'center', color: '#818282'}}>
                        <Text style={[styles.nameLabel, {margin: 3}]}>{this.state.firstName} {this.state.lastName}</Text>{'\n'}
                        <Text style={[styles.schoolLabel, {margin: 2}]}>{this.state.schoolName}</Text>{'\n'}
                        <Text style={[styles.gradYearLabel, {margin: 1}]}>Class of {this.state.gradYear}</Text>{'\n'}
                    </Text>
                </View>

                {/* Inspiration Title */}
                <View style={styles.subViewStyle}>
                    <View style={[styles.inspirationTitle, {marginTop: 20}]}>
                        <View style={styles.inspirationLine}/>
                        <Text style={styles.inspirationLabel}>  Inspiration  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                </View>

                {/* Inspiration Block */}
                <View style={styles.subViewStyle}>
                    <Text style={[styles.inspirationBlock, {marginTop: 40 }]}>
                        {this.state.inspiration}
                    </Text>
                </View>

                {/* Sign-Out button placed here temporarily to allow for testing of user sign-in/out flow */}
                <View >
                    <FgButton title={'Sign Out'} onPress={this._logout} />
                </View>
                <View style={styles.subViewStyle}>
                    <Button title={'Delete Account'} color='red' onPress={this._deleteAccount}/>
                </View>

                <View style={{marginTop: 22}}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        >

                        <ProfileForm 
                            title="Update your profile"
                            state="update"
                            onPressSubmitFunction={this.handleSubmit}
                            onPressBackFunction={() => {this.setModalVisible(false);}}
                        />

                    </Modal>
                </View>

            </ScrollView>
            )}
          </GlobalContext.Consumer>
        );   
    }
  
    
    _logout = async () => {
        this.service.logout(); 
        this.props.navigation.navigate('Auth');
    }

    _deleteAccount = async () => {
        Alert.alert(
            'Are you sure?',
            'You will lose all your data. This action cannot be undone.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'Delete Account', onPress: () => {
                this.service.deleteMember();
                this.props.navigation.navigate('Auth');
              }},
            ],
            {cancelable: false},
          );
    }

    handleSubmit = (member) => {
        console.log(member)
        // Grab the navigator
        const { navigate } = this.props.navigation;
        // Create member object from form field values
        const fgMember = new FgMember(member.firstName, member.lastName,
            member.schoolName, member.gradYear, null, null, member.inspiration);
        // Create member through backend service, store member to local storage, and proceed to SignedIn navigator
        this.service.updateMember(fgMember, SIGNED_IN_MEMBER_ID);
        this.setModalVisible(false);
    }

    //currently unused
    handleSignOut() {
        const { navigation } = this.props;
        DataManager.removeItemWithKey(SIGNED_IN_MEMBER_ID)
            .then(() => DataManager.removeItemWithKey(SIGNED_IN_MEMBER))
            .then(() => onSignOut())
            .then(() => navigation.navigate("SignedOut"))
            .catch( (e) => {
                if(e.message === "SyntaxError: JSON Parse error: Unexpected EOF")
                console.log("this is a new account")
                else console.log("error: " + e);
            });
    }

    // Load current signed in member from local storage.
    async loadFgMember() {
        return DataManager.getItemWithKey(SIGNED_IN_MEMBER)
            .catch((error) => console.log("[ERROR - FgProfile > loadFgMember() ]: ", error.message));
    }   
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        opacity: 1,
        backgroundColor: 'white'
    },
    subViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    nameLabel: {
        fontFamily: 'montserrat-light',
        fontSize: 24
    },
    schoolLabel: {
        fontFamily: 'open-sans-regular',
        fontSize: 16
    },
    gradYearLabel: {
        fontFamily: 'open-sans-regular',
        fontSize: 14
    },
    inspirationTitle: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    inspirationLabel: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#818282'
    },
    inspirationLine: {
        position: 'relative',
        borderBottomColor:'#818282',
        borderBottomWidth:1,
        height:'60%',
        width:'32%'
    },
    inspirationBlock: {
        fontFamily: 'open-sans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        margin: 20
    }

});
