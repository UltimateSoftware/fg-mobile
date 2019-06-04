import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Background from '../primatives/Background';
import {BANNER_HEIGHT_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../SharedConstants';

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
        alignItems: 'center',
        height: SCREEN_HEIGHT * BANNER_HEIGHT_RATIO,
        width: SCREEN_WIDTH,
        position: 'relative',
        left: 0,
        right: 0,
        top: 0,
    }
});