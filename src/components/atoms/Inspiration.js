import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';
import {ParagraphBlock} from '../primatives/ParagraphBlock';
/* 
This component represents any paragraph that needs to be rendered, which will
be called an "Inspiration" following the mockups

Inspiration renders a title with a slash accent and a block quote,
the block quote is optional
*/

export function Inspiration({title, inspiration, insMar, parMar}) {
    return (
        <View style={styles.subViewStyle}>
            <View style={[styles.inspirationTitle, {marginTop: insMar || 20}]}>
                <View style={styles.inspirationLine}/>
                <Text style={styles.inspirationLabel}>  {title}  </Text>
                <View style={styles.inspirationLine}/>
            </View>
            <ParagraphBlock inspiration={inspiration} mar={parMar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    subViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    inspirationTitle: {
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
    }
});