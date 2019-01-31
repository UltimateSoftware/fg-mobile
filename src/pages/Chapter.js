import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Avatar} from "../components/Avatar";
import {Banner} from "../components/Banner";
import { MOCKED_CHAPTER_with_BANNER_and_AVATAR } from '../test/MockedTypes';

export class Chapter extends React.Component {
    info = this.props.info

    componentDidMount() {
        chapter = MOCKED_CHAPTER_with_BANNER_and_AVATAR
        this.info = chapter
    }

    render() {
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            //Wrap entire profile in a ScrollView
            <ScrollView
                style={styles.scrollViewStyle}>
            <View style={styles.container}>

                // Render the Banner
                <Banner source={this.info.bannerSource}/>

                // Render the Avatar
                <View style={{ top: bannerHeight / 2, flex: 1, marginTop: -170}}>
                    <Avatar
                        avatarSize={'large'}
                        name={this.info.schoolName}
                        source={this.info.avatarSource}/>
                </View>

                // Render the member's name, school, and graduation year
                <Text style={[styles.textContainer, { top: bannerHeight * 1.5 }]}>
                    <Text style={styles.nameLabel}>{this.info.schoolName}</Text>{'\n'}
                    <Text style={styles.gradYearLabel}>Class of {this.info.chapter}</Text>{'\n'}
                </Text>

                // Render the 'Inspiration' title with horizontal dividers on each side
                <View style={[styles.inspirationTitle, {top: bannerHeight * 2.345}]}>
                    <View style={styles.inspirationLine}/>
                    <Text style={styles.inspirationLabel}>  Our History  </Text>
                    <View style={styles.inspirationLine}/>
                </View>

                // Render the member's inspiration block
                <Text style={[styles.inspirationBlock, {top: bannerHeight * 2.6, marginBottom: 150, paddingBottom: 350 }]}>
                    {this.info.history}
                </Text>

                <View>
                <Avatar
                        avatarSize={'small'}
                        name={this.info.leadershipAvatars.name}
                        source={this.info.leadershipAvatars.avatarSource}/>
                </View>
                // Render the member's name, school, and graduation year
                <Text style={[styles.textContainer, { top: bannerHeight * 1.5 }]}>
                    <Text style={styles.nameLabel}>{this.info.leadershipAvatars.name}</Text>{'\n'}
                    <Text style={styles.gradYearLabel}>Class of {this.info.leadershipAvatars.title}</Text>{'\n'}
                </Text>
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        opacity: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        color: '#818282',
        textAlign: 'center',
        marginTop: -180
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
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: -100
    },
    inspirationLabel: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#818282'
    },
    inspirationLine: {
        // position: 'relative',
        borderBottomColor:'#818282',
        borderBottomWidth:1,
        flex: 1
        // height:'60%',
        // width:'32%'
    },
    inspirationBlock: {
        flex:1,
        fontFamily: 'open-sans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        margin: 20
    }
});