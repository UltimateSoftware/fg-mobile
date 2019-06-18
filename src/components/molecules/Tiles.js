
import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../SharedConstants";
import {Tile} from '../atoms/Tile'

export function Tiles({onAction, tiles}){
    // Tiles are a tied to images
    return (
        <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.contentContainerStyle} bounces={false}>
            <View style={styles.container}>
            {tiles.map((item, index) => 
                    <TouchableOpacity key={item.id} onPress={() => onAction(item.id)}>
                        <Tile 
                        key={item.id} 
                        source={item.source} 
                        name={item.name} />
                    </TouchableOpacity>
            )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        width: '100%',
    },
    contentContainerStyle: {
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        marginTop: SCREEN_HEIGHT*0.03,
        marginBottom: SCREEN_HEIGHT*0.03,
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        color: '#818282',
        textAlign: 'center'
    },
    inspirationTitle: {
        position: 'absolute',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
});