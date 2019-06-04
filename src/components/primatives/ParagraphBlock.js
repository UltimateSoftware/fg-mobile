import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';


export function ParagraphBlock({inspiration}) { 
    return (
        <View style={styles.subViewStyle}>
            <Text style={[styles.inspirationBlock, {marginTop: 40 }]}>
                {inspiration}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    inspirationBlock: {
        fontFamily: 'opensans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        margin: 20
    }
});