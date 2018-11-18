import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from "../components/Avatar";
import {Banner} from "../components/Banner";
import {BANNER_HEIGHT_WIDTH_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/sharedConstants";
import {DataManager, SIGNED_IN_MEMBER} from "../DataManager";
import {FgMember} from "../types/FgMember";

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
        }
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
                this.setState({member: fgMember, loading: 'false'});
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
            <ScrollView
                style={styles.scrollViewStyle}>
            <View style={styles.container}>

                // Render the Banner
                <Banner source={this.state.member.bannerSource}/>

                // Render the Avatar
                <View style={{ top: bannerHeight / 2, position: 'absolute'}}>
                    <Avatar
                        avatarSize={'large'}
                        name={this.state.member.fullName()}
                        source={this.state.member.avatarSource}/>
                </View>

                // Render the member's name, school, and graduation year
                <Text style={[styles.textContainer, { top: bannerHeight * 1.5 }]}>
                    <Text style={styles.nameLabel}>{this.state.member.fullName()}</Text>{'\n'}
                    <Text style={styles.schoolLabel}>{this.state.member.schoolName}</Text>{'\n'}
                    <Text style={styles.gradYearLabel}>Class of {this.state.member.gradYear}</Text>{'\n'}
                </Text>

                // Render the 'Inspiration' title with horizontal dividers on each side
                <View style={[styles.inspirationTitle, {top: bannerHeight * 2.345}]}>
                    <View style={styles.inspirationLine}/>
                    <Text style={styles.inspirationLabel}>  Inspiration  </Text>
                    <View style={styles.inspirationLine}/>
                </View>

                // Render the member's inspiration block
                <Text style={[styles.inspirationBlock, {top: bannerHeight * 2.6 }]}>
                    {this.state.member.inspiration}
                </Text>


            </View>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    scrollViewStyle: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        opacity: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#ffffff'
    },
    textContainer: {
        position: 'absolute',
        color: '#818282',
        textAlign: 'center'
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
        position: 'absolute',
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
        position: 'absolute',
        margin: 20
    }
});
