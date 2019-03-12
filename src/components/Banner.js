import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, ImageBackground} from 'react-native';
import {SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import { Header, Left, Button, Body, Right, Title, Card, H1} from 'native-base';

export class Banner extends Component {

    //TODO: Ask about default background color and text color for initials, currently Pink(from wire frame Buttons)
    //TODO: Create README for Avatar Component

    render() {
        const {
            source,
            text,
            color
        } = this.props;

        let inner = null;

        if(source) {
            if(text) {
            inner =
                <ImageBackground
                    source={{ uri: source }}
                    style={styles.bannerStyleWithText}>
                    <H1 style={{fontFamily: 'open-sans-regular', color:'white', borderRadius: 1, borderColor:'black'}}>{this.props.text}</H1>
                    </ImageBackground>
            } else {
                inner =
                <Image
                    source={{ uri: source }}
                    style={styles.bannerStyle}/>
            }
        }else if(color) {
                inner = <View style={[styles.bannerStyleWithText,{ backgroundColor: color }]}><H1 style={{fontFamily: 'open-sans-regular', color:'white', borderRadius: 1, borderColor:'black'}}>{this.props.text}</H1></View>
            }
        else {
            //if user does not supply a banner image, simply render a grey background
            inner =
                <View
                    style={
                        [styles.bannerStyle,
                        { backgroundColor: 'lightgray' }]}/>
        }
        return (
            <View>{ inner }</View>
            
        );
    }
}

const styles = StyleSheet.create({
    bannerStyle: {
        height: SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO,
        width: SCREEN_WIDTH,
        position:'relative'
    },
    bannerStyleWithText: {
        height: SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO,
        width: SCREEN_WIDTH,
        position:'relative',
        alignItems:'center',
        justifyContent:'center'
        
    }
});
