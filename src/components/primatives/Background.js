import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView
} from 'react-native';

export default function Background(props){
    const {img, color} = props;
    
    var image = img ? require('../../../assets/fearlesslyGirl_logo.jpg') : img;
    return (
        <SafeAreaView style={styles.container}>
            {img && <ImageBackground
                    source={image}
                    resizeMode={"center"}
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
        flex: 1,
        width: "100%",
        height: "100%"
    },
    imgBackground: {
        flex: 1,
    },
    colorBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    }
})