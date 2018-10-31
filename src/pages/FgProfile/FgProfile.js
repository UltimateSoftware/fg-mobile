import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';

import {Avatar} from "../../components/Avatar";
import {Banner} from "../../components/Banner";
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../utils/sharedConstants";

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent

export class FgProfile extends React.Component {
    member = this.props.member;

    render() {
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            //Wrap entire profile in a ScrollView
            <ScrollView
                style={styles.scrollViewStyle}
                bounces={false}
            >
            <View style={styles.container}>

                // Render the Banner
                <Banner source={this.member.bannerSource}/>

                // Render the Avatar
                <View style={{ top: bannerHeight / 2, flex: 1, marginTop: -170}}>
                    <Avatar
                        avatarSize={'large'}
                        name={this.member.fullName()}
                        source={this.member.avatarSource}/>
                </View>

                // Render the member's name, school, and graduation year
                <Text style={[styles.textContainer, { top: bannerHeight * 1.5 }]}>
                    <Text style={styles.nameLabel}>{this.member.fullName()}</Text>{'\n'}
                    <Text style={styles.schoolLabel}>{this.member.schoolName}</Text>{'\n'}
                    <Text style={styles.gradYearLabel}>Class of {this.member.gradYear}</Text>{'\n'}
                </Text>

                // Render the 'Inspiration' title with horizontal dividers on each side
                <View style={[styles.inspirationTitle, {top: bannerHeight * 2.345}]}>
                    <View style={styles.inspirationLine}/>
                    <Text style={styles.inspirationLabel}>  Inspiration  </Text>
                    <View style={styles.inspirationLine}/>
                </View>

                // Render the member's inspiration block
                <Text style={[styles.inspirationBlock, {top: bannerHeight * 2.6, marginBottom: 150, paddingBottom: 150 }]}>
                    {this.member.inspiration},
                    habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                habsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                Viewhabsviabvilubsalivbyabviybalviybasdilvybasdoivbyasdiv
                </Text>

            </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        opacity: 1
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
