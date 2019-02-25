import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from "../components/Avatar";
import {Banner} from "../components/Banner";
import {EditButton} from "../components/EditButton";
import {BANNER_HEIGHT_WIDTH_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/sharedConstants";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {FgMember} from "../types/FgMember";
import {MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR} from "../test/MockedTypes";
import {onSignIn, onSignOut} from "../Auth";

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent

export class FgProfile extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: 'initial',
            member: null
        };
        this.handleSignOut.bind(this);
        this.handleEdit.bind(this);
    }

    // Load current signed in member from local storage.
    async loadFgMember() {
        return DataManager.getItemWithKey(SIGNED_IN_MEMBER)
            .catch((error) => console.log("[ERROR - FgProfile > loadFgMember() ]: ", error.message));
    }

    componentDidMount() {
        this.setState({ loading: 'true' });
        this.loadFgMember()
            .then( (data) => {
                const fgMember = new FgMember(
                    data.firstName,
                    data.lastName,
                    data.schoolName,
                    data.gradYear,
                    data.bannerSource,
                    data.avatarSource,
                    data.inspiration
                );
                //this.setState({member: fgMember, loading: 'false'});
                this.setState({member: fgMember, loading: false});
            })
            .catch( (error) => console.log(error.message));
    }

    render() {

        if( this.state.loading === 'initial' ) {
            return <Text>Initializing</Text>
        }

        if( this.state.loading === 'true' ) {
            return <Text>Loading</Text>
        }

        console.log("LOADED member: ", this.state.member);
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            //Wrap entire profile in a ScrollView
            <ScrollView style={styles.scrollViewStyle} bounces={false}>

                //Banner
                <View style={styles.subViewStyle}>
                    <View style={{position: 'absolute'}}>
                        <Banner source={this.state.member.bannerSource}/>
                    </View>
                </View>
                
                //Avatar
                <View style={styles.subViewStyle}>
                    <View style={{marginTop: (bannerHeight/2)}}>
                        <Avatar
                            avatarSize={'large'}
                            name={this.state.member.fullName()}
                            source={this.state.member.avatarSource}/>
                    </View>
                </View>

                //Edit Button
                <View style={{position: 'absolute', right: 10, marginTop: (bannerHeight+10)}}>
                    <EditButton 
                        onPress={() => this.handleEdit()}/> 
                </View>

                //Name, School, and Grad Year
                <View style={styles.subViewStyle}>
                    <Text style={{marginTop: 20, textAlign: 'center', color: '#818282'}}>
                        <Text style={[styles.nameLabel, {margin: 3}]}>{this.state.member.fullName()}</Text>{'\n'}
                        <Text style={[styles.schoolLabel, {margin: 2}]}>{this.state.member.schoolName}</Text>{'\n'}
                        <Text style={[styles.gradYearLabel, {margin: 1}]}>Class of {this.state.member.gradYear}</Text>{'\n'}
                    </Text>
                </View>

                //Inspiration Title
                <View style={styles.subViewStyle}>
                    <View style={[styles.inspirationTitle, {marginTop: 60}]}>
                        <View style={styles.inspirationLine}/>
                        <Text style={styles.inspirationLabel}>  Inspiration  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                </View>

                //Inspiration Block
                <View style={styles.subViewStyle}>
                    <Text style={[styles.inspirationBlock, {marginTop: 40 }]}>
                        {this.state.member.inspiration}
                    </Text>
                </View>

                //Sign-Out button placed here temporarily to allow for testing of user sign-in/out flow
                <View style={styles.subViewStyle}>
                    <Button title={"Sign Out"} onPress={() => this.handleSignOut()}/>
                </View>

            </ScrollView>
        );
    }

    handleSignOut() {
        const { navigation } = this.props;
        DataManager.removeItemWithKey(SIGNED_IN_MEMBER_ID)
            .then( () => DataManager.removeItemWithKey(SIGNED_IN_MEMBER))
            .then(() => onSignOut())
            .then(() => navigation.navigate("SignedOut"))
            .catch( (error) => console.log(error.message));

    }

    handleEdit() {
        const { navigation } = this.props;
        navigation.navigate("EditProfile");
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
