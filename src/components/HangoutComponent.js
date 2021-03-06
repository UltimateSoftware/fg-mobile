import React, { Component } from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";

const imageDict = {
    "#girlboss": require('../../assets/hangout_icons/girlboss.png'),
    "zen girl": require('../../assets/hangout_icons/zen.png'),
    "girl drama": require('../../assets/hangout_icons/drama.png'),
    "friendships": require('../../assets/hangout_icons/girlfriends.png'),
    "self love & self esteem": require('../../assets/hangout_icons/self-love.png'),
    "fearlessness": require('../../assets/hangout_icons/fearless.png'),
    "dream on, baby!": require('../../assets/hangout_icons/dream.png'),
    "dating & relationships": require('../../assets/hangout_icons/friendships.png'),
    "the supergirl dilema": require('../../assets/hangout_icons/supergirl.png')
}

export class HangoutComponent extends Component {

    checkIsEven(n) {
        if(n%2 == 0) {
            return true;
        }
        return false;
    }

    pickImage(icon) {
        image = imageDict[icon.toLowerCase()];

        if(image == undefined) {
            // default
            return require('../../assets/hangout_icons/girlfriends.png');
        }
        
        return imageDict[icon.toLowerCase()];
    }

    render() {
        const {
            title,
            index
        } = this.props;

        return (
            <View key={index} style = {styles.item}>
            <Image style={{height:100, width:100, display: 'flex'}} source={this.pickImage(title)}/>
            <Text style={{marginTop: 10, textAlign: 'center', color: 'rgba(0, 0, 0, 0.84)'}}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        opacity: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        height: SCREEN_WIDTH*.4,
        width: SCREEN_WIDTH*.4,
        borderColor: 'rgba(58, 106, 117, 0.18)',
        borderWidth: 1,
        marginBottom:10,
        marginRight: 10,
        borderRadius : 20,
        shadowColor: '#292829', 
		shadowOffset: { width: 1, height: 3 }, 
		shadowOpacity: 0.16, 
		shadowRadius: 3,
        elevation: 3,
    },
});