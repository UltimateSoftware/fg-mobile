import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView
} from 'react-native';

import {SCREEN_WIDTH, frames} from '../../SharedConstants'


export default function Background(props){
    const {img, color} = props;

    var image = img

    return (
        <SafeAreaView style={styles.container}>
            {img && <ImageBackground
                    source={image}
                    resizeMode={"cover"}
                    style={[styles.imgBackground]}
                >
                {props.children}
            </ImageBackground>}
            {color && !img && <View style={[styles.colorBackground, {backgroundColor: color}]}>{props.children}</View>}
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: frames.lg,
    },
    imgBackground: {
        width: "100%",
        height: "100%",
    },
    colorBackground: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})