
import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../SharedConstants";


export function Tile({id, source, name}) {
    return (

        <View key={id} style={styles.item}>
            {/* React components that are rendered in Lists require a key */}
            <Image source={source} style={{height: 50, width: 50}} resizeMode="contain"/>
            <Text style={{marginTop: 10, textAlign: 'center', color: 'rgba(0, 0, 0, 0.84)'}}>{name}</Text>
        </View>
    );
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
