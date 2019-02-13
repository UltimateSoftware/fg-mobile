import React from 'react';
import {ActivityIndicator, Button, ScrollView, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Avatar} from "../components/Avatar";
import {Banner} from "../components/Banner";
import {FgModal} from "../components/FgModal";
import {BANNER_HEIGHT_WIDTH_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/sharedConstants";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {onSignIn, onSignOut} from "../Auth";
import {FgButton} from "../components/FgButton";
import {AsyncStorage} from 'react-native';
import {GlobalContext} from '../services/GlobalProvider'
import {FgProfileService} from "../services/FgProfileService";
import { SafeAreaView } from 'react-navigation';

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
            modalFlag: false,
            member: null,
            showActivityIndicator: false,
            firstName: null,
            lastName: null,
            schoolName: null,
            gradYear: null,
            inspiration: null,
        };

        this.handleSignOut.bind(this);
        this.toggleModalFlag.bind(this);
    }

    async componentWillMount() {
        this.setState({loading: 'true'});
        const profileStr = await AsyncStorage.getItem('profile');
        const profileObj = JSON.parse(profileStr);
        this.setState({
            firstName: profileObj.firstName,
            lastName: profileObj.lastName,
            schoolName: profileObj.schoolName,
            gradYear: profileObj.gradYear,
            inspiration: profileObj.inspiration,
            bannerSource: profileObj.bannerSource,
            avatarSource: profileObj.avatarSource,
            chapterId: profileObj.chapterId,
            loading: false
        });
    }

    toggleModalFlag(flagValue, componentState) {
        componentState.setState({modalFlag: flagValue});
    }

    async updateMemberWithChapterId(chapterId) {
        this.setState({showActivityIndicator: true});
        let member = this.state.member;
        member.chapterId = chapterId;
        try {
            let signedInMemberID = await this.profileService.updateMember(member);
            if (signedInMemberID) {
                DataManager.setItemForKey(SIGNED_IN_MEMBER, member);
                this.setState({member});
            }
        } catch (error) {
            console.log("Error: ", error)
            member.chapterId = undefined;
        }
        this.setState({showActivityIndicator: false})
    }

    render() {

        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;

        if(this.state.loading === 'initial') {
            return <Text>Initializing</Text>
        }

        if(this.state.loading === 'true') {
            return <Text>Loading</Text>
        }

        if(this.state.showActivityIndicator) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              )
        }

        console.log("LOADED member: ", this.state.member);
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            <GlobalContext.Consumer>
                {context => (
                //Wrap entire profile in a ScrollView
                <SafeAreaView style={{flex: 1}} forceInset={{ bottom: 'never' }}>
                    <ScrollView 
                        style={styles.scrollViewStyle} 
                        bounces={false} 
                        stickyHeaderIndices={!this.state.chapterId ? [1] : []}
                    >
                        
                        //Request Chapter Access Banner
                        //If this member is not apart of a chapter
                        {!this.state.chapterId && 
                            <View style={styles.requestChapterAccess}>
                                <TouchableHighlight onPress={() => this.toggleModalFlag(true, this)}>
                                    <Text style= {styles.bannerText}>Request access to a chapter</Text>
                                </TouchableHighlight>
                                //If the modalFlag is true
                                {this.state.modalFlag && 
                                <FgModal 
                                    toggleMethod= {this.toggleModalFlag}
                                    componentState= {this}
                                    updateMemberMethod={this.updateMemberWithChapterId.bind(this)}
                                />
                                }
                            </View>
                        }
                        
                        //Banner
                        <View style={styles.subViewStyle}>
                            <View style={{position: 'absolute'}}>
                                <Banner source={this.state.bannerSource}/>
                            </View>
                        </View>

                        //Avatar
                        <View style={styles.subViewStyle}>
                            <View style={{marginTop: (bannerHeight/2)}}>
                                <Avatar
                                    avatarSize={'large'}
                                    name={`${this.state.firstName} ${this.state.lastName}`}
                                    source={this.state.avatarSource}/>
                            </View>
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
                    </ScrollView>
                </SafeAreaView>
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
    },
    requestChapterAccess: {
        flex: 1,
        backgroundColor: '#F313B7',
        padding: 15
    },
    bannerText: {
        justifyContent: 'center',
        fontSize: 18,
        textDecorationLine: 'underline',
        color: '#FFFFFF'
      }
});
