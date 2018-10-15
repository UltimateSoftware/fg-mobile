import React, { Component } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";

export class Banner extends Component {

    //TODO: Ask about default background color and text color for initials, currently Pink(from wire frame Buttons)
    //TODO: Create README for Avatar Component

    render() {
        const {
            source
        } = this.props;

        let inner = null;

        if(source) {
            inner =
                <Image
                    source={{ uri: source }}
                    style={styles.bannerStyle}/>
        }else {
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
    }
});
