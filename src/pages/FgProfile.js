import React from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import {Avatar} from "../components/Avatar";

const SCREEN_WIDTH = Dimensions.get('window').width;
const BANNER_HEIGHT_WIDTH_RATIO = 0.45;

export class FgProfile extends React.Component {

    render() {
        const { bannerSource, avatarSource, name, schoolName, gradYear, inspiration } = this.props;
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;

        return (
            <View style={styles.container}>

                // Render the Banner
                <Image
                    source={{ uri: bannerSource }}
                    style={{
                        height: bannerHeight,
                        width: SCREEN_WIDTH,
                        position: 'absolute'
                    }}/>

                // Render the Avatar
                <View style={{ top: bannerHeight / 2 }}>
                    <Avatar
                        avatarSize={'large'}
                        name={name}
                        source={avatarSource}/>
                </View>

                // Render the member's name, school, and graduation year
                <Text style={[styles.textContainer, { top: bannerHeight * 1.5 }]}>
                    <Text style={styles.nameLabel}>{name}</Text>{'\n'}
                    <Text style={styles.schoolLabel}>{schoolName}</Text>{'\n'}
                    <Text style={styles.gradYearLabel}>Class of {gradYear}</Text>{'\n'}
                </Text>

                // Render the 'Inspiration' title with horizontal dividers on each side
                <View style={[styles.inspirationTitle, {top: bannerHeight * 2.345}]}>
                    <View style={styles.inspirationLine}/>
                    <Text style={styles.inspirationLabel}>  Inspiration  </Text>
                    <View style={styles.inspirationLine}/>
                </View>

                // Render the member's inspiration block
                <Text style={[styles.inspirationBlock, {top: bannerHeight * 2.6 }]}>
                    {inspiration}
                </Text>


            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
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
