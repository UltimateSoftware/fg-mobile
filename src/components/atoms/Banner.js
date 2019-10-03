import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Background from '../primatives/Background';
import {SCREEN_HEIGHT, SCREEN_WIDTH, frames} from '../../SharedConstants';

export function Banner(props){
    const {source, color} = props;
    
    return (
        <View style={styles.area}>
            <Background img={source} color={color}>
                {props.children}
            </Background>
        </View>
    );
    
}

const styles = StyleSheet.create({
    area: {
        height: null,
        width: null,
    }
});