import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';


export function ParagraphBlock({inspiration, mar}) { 
    if (inspiration) {
        return (
            <View style={styles.subViewStyle}>
                <Text style={[styles.inspirationBlock, {marginTop: mar || 40 }]}>
                    {inspiration}
                </Text>
            </View>
        );
    } else {
        return (<View />);
    }
}

const styles = StyleSheet.create({
    subViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    inspirationBlock: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        margin: 20
    }
});